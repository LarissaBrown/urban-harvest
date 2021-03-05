const { db } = require('../util/admin')

exports.getAllHarvests = (req, res) => {
    db
       .collection('harvests')
       .orderBy('createdAt', 'desc')
       .get()
       .then((data) => {
       let harvest = []
       data.forEach((doc) => {
         harvest.push({
           harvestId: doc.id,
           ...doc.data()
           
       })
       })
       return res.json(harvest)
     })
     .catch((err) => {
       res.status(500).json({ error: "something went wrong"})
       console.error(err)
     })
   }

   exports.postOneHarvest = (req, res) => {
    const newHarvest = {
      body: req.body.body, 
      userHandle: req.user.handle,
      createdAt: new Date().toISOString()
    }
    db
    .collection("harvests")
    .add(newHarvest)
    .then((doc) => {
      return res.json({ message: `document ${doc.id} created successfully`});
    })
      .catch(( err )=> {
        res.status(500).json({ error: `something went wrong`})
        console.error(err)
      })
  }

  exports.uploadImage = (req, res) => {
    const BusBoy = require('busboy')
    const path = require('path')
    const os = require('os')
    const fs = require('fs')

    const busboy = new BusBoy({ headers: req.headers })
  
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    //my.image.png
    const imageExtension = filename.split('.')[filename.split('.').length-1]
    //645235423674523.png
    imageFileName = `${Math.round(Math.random()*100000000000)}.${imageExtension}`
    const filepath = path.join(os.tmpdir(), imageFileName)
    imageToBeUploaded = { filepath, mimetype }
    file.pipe(fs.createWriteStream(filepath))

  })
  busboy.on('finish', ()=> {
    admin.storage().bucket().upload(imageToBeUploaded.filepath, {
      resumable: false,
      metadata: {
        metadata: {
          contentType: imageToBeUploaded.mimetype
        }
      }
    })
    .then(() => {
      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
      return db.doc(`/harvests/${req.user.handle}`).update({ imageUrl: imageUrl })
    })
    .then( () => {
      return res.json( { message: "Image uploaded successfully"})
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ error: err.code})
    })

  busboy.end(req.rawBody)
  })
}
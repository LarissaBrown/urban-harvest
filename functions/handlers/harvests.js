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

const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbauth')

const { getAllHarvests , postOneHarvest} = require('./handlers/harvests')
const { signup, login, uploadImage } = require('./handlers/users')


//Harvest Routes
app.get('/harvests', getAllHarvests)
app.post('/harvest', FBAuth, postOneHarvest)
app.post('/harvest/image',  uploadImage)

//Users Routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)

exports.api = functions.https.onRequest(app)

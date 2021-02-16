const admin = require('firebase-admin');
const firebase = require('firebase')
const config = require('../util/config')

admin.initializeApp()


const db = admin.firestore()

module.exports = { admin, db }
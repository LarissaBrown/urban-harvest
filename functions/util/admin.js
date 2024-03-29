/* eslint-disable no-dupe-else-if */
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const {credential} = require("firebase-admin");

admin.initializeApp({
  credential: credential.cert(serviceAccount),
  databaseUrl: "http://urban-harvest-15357.firebaseapp.com",
});


const db = admin.firestore();

module.exports = {admin, db};

const admin = require("firebase-admin");
const serviceAccount = require("./lift-8f86f-firebase-adminsdk-i3key-c61d6b5187.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
module.exports=admin
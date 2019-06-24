const functions = require('firebase-functions');
const { generateReferralCode } = require('./user');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.generateReferralCode = functions.https.onCall(generateReferralCode);
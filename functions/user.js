const admin = require('firebase-admin');
const functions = require('firebase-functions');
const voucherCode = require('voucher-code-generator');

admin.initializeApp();

exports.generateReferralCode = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition',
      'The function must be called while authenticated.');
  }

  const { uid } = context.auth;

  const collectionRef = admin.firestore().collection('referralCodes');

  // query for user's unused referral codes
  const snapshot = await collectionRef
    .where('referrerUid', '==', uid)
    .where('refereeUid', '==', null)
    .get();

  if (snapshot.empty) {
    // generate a new one
    console.log('No matching documents.');
    const [ code ] = voucherCode.generate({ length: 8 });
    console.log('Generated code ', code);
    collectionRef.add({
      referrerUid: uid,
      refereeUid: null,
      code
    });

    return { code };
  }

  const codes = []

  snapshot.forEach(documentSnapshot => {
    const code = documentSnapshot.get('code');
    console.log(`Found code ${code} at ${documentSnapshot.ref.path}`);
    codes.push(code);
  });

  return { code: codes[0] };
}
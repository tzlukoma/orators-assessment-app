const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Orators!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
})

exports.assessmentCreated = functions.firestore
    .document('assessments/{assessmentId}')
    .onCreate(doc => {

        const assessment = doc.data();
        const notification = {
            content: 'Added a new assessment',
            user: `${assessment.coachFirstName} ${assessment.coachLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
})

exports.userJoined = functions.auth.user()
    .onCreate(user => {

    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })
})

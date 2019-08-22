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

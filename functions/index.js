const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

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
            content: `added a new assessment for ${assessment.firstName} ${assessment.lastName}`,
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
            content: `signed up with the Orator's App`,
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })
})

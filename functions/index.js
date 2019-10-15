const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {

        user: gmailEmail,
        pass: gmailPassword
    }
});

const APP_NAME = 'Orators App'

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const email = user.email; // The email of the user.
    const bccEmail = 'tzlukoma@gmail.com'; // The display name of the user.

    return sendWelcomeEmail(email, bccEmail);
});

async function sendWelcomeEmail(email, bccEmail) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        bcc: bccEmail
    };

    // The user subscribed to the newsletter.
    mailOptions.subject = `Welcome to the ${APP_NAME}!`;
    mailOptions.text = `Hello and welcome to the ${APP_NAME}. 
    
We hope this application will be a great companion to your experience with the New Jersey Orators organization.

Make sure to check the app on a weekly basis to see your orator's assessments provided by their coaches.
    
New Jersey Orators Team`;
    await mailTransport.sendMail(mailOptions);
    console.log('New welcome email sent to:', email);
    return null;
}

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

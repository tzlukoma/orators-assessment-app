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

    return sendWelcomeEmail(email);
});

exports.sendNewUserEmail = functions.auth.user().onCreate((user) => {
    const email = user.email; // The email of the user.

    return sendNewUserEmail(email);
});

async function sendWelcomeEmail(email) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email
    };

    mailOptions.subject = `Welcome to the ${APP_NAME}!`;
    mailOptions.text = `Hello and welcome to the ${APP_NAME}. 
    
We hope this application will be a great companion to your experience with the New Jersey Orators organization.

Make sure to check the app on a weekly basis to see your orator's assessments provided by their coaches.
    
New Jersey Orators Team`;
    await mailTransport.sendMail(mailOptions);
    console.log('New welcome email sent to:', email);
    return null;
}

async function sendNewUserEmail(email) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: `tzlukoma@gmail.com`
    };

    mailOptions.subject = `New User Added to the ${APP_NAME}!`;
    mailOptions.text = `${email} just joined the ${APP_NAME}. 
    
A new user with email address ${email} just joined the ${APP_NAME}`;
    await mailTransport.sendMail(mailOptions);
    console.log('New user email sent to: tzlukoma@gmail.com');
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

exports.emailAssessment = functions.firestore
    .document('assessments/{assessmentId}')
    .onCreate(doc => {

        const assessment = doc.data();
        const emailAssessment = {
            id: `${assessment.id}`,
            orator_id: `${assessment.orator_id}`,
            orator: `${assessment.firstName} ${assessment.lastName}`,
            email: `${assessment.parent_email}`,
            coach: `${assessment.coachFirstName} ${assessment.coachLastName}`,
            time: `${assessment.createdAt}`,
            comment: `${assessment.comment}`,
            vocabulary: `${assessment.vocabulary}`,
            filler_words: `${assessment.filler_words}`,
            content: `${assessment.content}`,
            projection_volume: `${assessment.projection_volume}`,
            enunciation: `${assessment.enunciation}`,
            eye_contact: `${assessment.eye_contact}`,
            posture: `${assessment.posture}`,
            remarks: `${assessment.remarks}`,
            createdAt: new Date()
        }

        return sendAssessmentEmail(emailAssessment);
    })
async function sendAssessmentEmail(assessment) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: `${assessment.email}, llukoma@gmail.com`
    };

    mailOptions.subject = `Orator Assessment - ${assessment.orator}`;
    mailOptions.html = `
    
<p>${assessment.coach} just added an assessment for ${assessment.orator}.</p> 
<hr style="border-top:1px #d3d3d3">   
<p><strong>Comments</strong></p

<p>${assessment.comment}<p>

<p><strong>Ratings</strong></p>
<table style="border:solid 1px #d3d3d3; width: 400px">
  <tr>
    <th style="text-align:left">Category</th>
    <th style="text-align:center">Rating</th>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Word Choice / Vocabulary:  </td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.vocabulary}</td>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Filler Words:</td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.filler_words}</td>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Content:</td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.content}</td>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Projection &amp; Volume:</td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.projection_volume}</td>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Enunciation:</td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.enunciation}</td>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Eye Contact:</td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.eye_contact}</td>
  </tr>
  <tr>
    <td style="border: solid 1px #d3d3d3">Posture:</td>
    <td style="text-align:center; border:solid 1px #d3d3d3">${assessment.posture}</td>
  </tr>
</table>

<p><strong>Additional Remarks</strong></p
<p>${assessment.remarks}</p>

<p>View ${assessment.orator}'s full report <a href="https://orators-app-dev.firebaseapp.com/orator/${assessment.orator_id}">here</a>.</p>

<hr style="border-top:1px #d3d3d3">  
This email is automatically generated.
    `
    await mailTransport.sendMail(mailOptions);
    console.log('New user email sent to: tzlukoma@gmail.com');
    return null;
}


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

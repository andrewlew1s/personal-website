const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY)

exports.firestoreEmail = functions.firestore
    .document('form/{userId}')
    .onCreate((event, context) => {

        const userId = context.params.userId;

        const db = admin.firestore()

        return db.collection('form').doc(userId)
        .get()
        .then(doc => {
            const person = doc.data()

            const msg = {
                to: 'andrew12lewis@gmail.com',
                from: person.email,

                templateId: 'd-f2e55b99651f4a6d8b1e61320cf005af',
                setSubstitutionWrappers: ['{{','}}'],
                dynamic_template_data: {
                    name: person.name,
                    email: person.email,
                    message: person.message
                }
            };
            return sgMail.send(msg)
        })
        .then(() => console.log('email sent!'))
        .catch(err => console.log(err))
    })
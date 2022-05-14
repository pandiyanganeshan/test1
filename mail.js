// Use at least Nodemailer v4.1.0
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';

// Generate SMTP service account from ethereal.email
createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure:false,
        auth: {
            user: 'ruben.sawayn84@ethereal.email',
            pass: 'ZzmeuAzgdKz392vzZN'
        }
    });

    // let transporter = createTransport({
    //     host: account.smtp.host,
    //     port: account.smtp.port,
    //     secure: account.smtp.secure,
    //     auth: {
    //         user: 'mathias.zboncak72@ethereal.email',
    //         pass: 'j2YR547GWn6smYGEha'
    //     }
    // });


    // Message object
    let message = {
        from: 'pandiyan <sender@example.com>',
        to: 'pandiyanupwork@gmail.com',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', getTestMessageUrl(info));
    });
});
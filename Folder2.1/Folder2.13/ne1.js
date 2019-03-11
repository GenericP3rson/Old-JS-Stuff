var ne = require('nodemailer');

var trans = ne.createTransport({
    service: 'gmail',
    auth: {
        user: "schaudhary@keystoneschool.org",
        pass: "<ENTER_PASSWORD_HERE>"
    }
});

var mailStuff = {
    from: "'The Talented Tape Master' <schaudhary@s.keystoneschool.org>",
    to: "'Captain Cross of the Crosh Command Line' <scross@s.keystoneschool.org>",
    subject: "Maybe? Hopefully?",
    html: ""
}

trans.sendMail(mailStuff, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
})
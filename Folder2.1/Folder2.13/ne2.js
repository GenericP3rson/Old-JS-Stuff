var ne = require('nodemailer');
var http = require('http');
var fs = require('fs');

var trans = ne.createTransport({
    service: 'gmail',
    auth: {
        user: "schaudhary@keystoneschool.org",
        pass: "<ENTER_PASSWORD_HERE>"
    }
});

var mailStuff = {
    from: "'The Talented Tape Master' <schaudhary@s.keystoneschool.org>",
    to: "'Captain Cross' <scross@s.keystoneschool.org>",
    subject: "T Minus Two Days",
    html: "Dear Ms. Cross, <br> Hey, Captain, I apologize if I'm getting more annoying (again), but I have a human-ly desire to make sure you know of the course commencing on the morrow after the next. Will you be joining me? <br> Sincerely, <br> Shreya, <br> The Talented Tape Master."
}

trans.sendMail(mailStuff, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
})
var ne = require('nodemailer');

var trans = ne.createTransport({
    service: 'gmail',
    auth: {
        user: "schaudhary@keystoneschool.org",
        pass: "<ENTER_PASSWORD_HERE>"
    }
});

var mailStuff = {
    from: "schaudhary@s.keystoneschool.org",
    to: "scross@s.keystoneschool.org",
    subject: "If This Does Work, Let's Hope It Doesn't Go To Your Spam",
    html: "Dear Ms. Cross, <br> I'm trying to send an email via node.js. I'm sending it to you because you're either the person who would get the least annoyed or the most annoyed, I don't remember. Anyways, this email may or may not get through, and, either way, I don't think I'll be able to tell and it'll be kind of cool. <br> Failure count: III. <br> Sincerely, <br> Shreya, <br> The Talented Tape Master."
}

trans.sendMail(mailStuff, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
})
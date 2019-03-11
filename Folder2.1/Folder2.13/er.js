var ne = require('nodemailer');

var trans = ne.createTransport({
    service: 'gmail',
    auth: {
        user: "schaudhary@keystoneschool.org",
        pass: "<ENTER_PASSWORD_HERE>"
    }
});

var mailStuff = {
    from: "'Truce...?' <schaudhary@s.keystoneschool.org>",
    to: "'Ms. Cheng the Best and Greatest' <a.cheng2003@yahoo.com>",
    subject: "Subject",
    html: "Dear Ms. Cheng, <br> <h1>So</h1> <h2>I'm hoping you're doing alright, </h2><h3>'cause I'm not sure where I sent you.</h3><h4>It turns out your father's firewall was too powerful</h4><h5>for my Mac to get through.</h5><h6>By the way, infinite emails don't work.</h6> <br> Sincerely, <br> Me."
}

trans.sendMail(mailStuff, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
})
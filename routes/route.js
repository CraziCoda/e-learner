const express = require("express");
const { Account, Lesson } = require("../config/model");
const fs = require('fs');

const router = express.Router();

let data;
try {
  data = fs.readFileSync(`./routes/life_processes.txt`, 'utf8')
  //console.log(data)
} catch (err) {
  console.error(err)
} 


router.get("/", (req, res) => {
    res.render("index.hbs", { title: "E-learner", style: "../styles/style.css" });
});

router.get('/download', (req,res)=>{
    let file = req.query.file;
    let ext = req.query.ext;
    file = file.split('_').join(' ');
    console.log(file, ext);

    res.sendFile(`./assets/${file}.${ext}`, {root: '.'});
});


router.get('/lesson', (req, res) => {

    Lesson.findOne({ _id: req.query.less }, (err, doc) => {
        if (err) return console.log(`Error: ${err}`);

        res.render("./pages/topic.hbs", {
            title: "E-learner",
            style: "../styles/topic.css",
            foreword: doc?.foreword,
            title: doc?.title,
            topic: doc?.topic
        });
    });
});


router.get('/student', (req, res) => {
    if (req.query.id == undefined) return res.redirect('/');

    Account.findOne({ _id: req.query.id }, (err, doc) => {
        if (!doc.name) res.redirect('/');
        if (err) return console.log(`Error: ${err}`);
        Lesson.find({}, (err, docs) => {
            let Science = [];
            let Mathematics = [];
            let SocialStudies = [];
            let English = [];

            //Sort Lessons into groups
            for (let i = 0; i < docs.length; i++) {
                let lesson = docs[i];
                switch (lesson.subject) {
                    case "science":
                        Science.push(lesson);
                        break;
                    case "mathematics":
                        Mathematics.push(lesson);
                        break;
                    case "social-studies":
                        SocialStudies.push(lesson);
                        break;
                    case "english":
                        English.push(lesson);
                        break;
                }
            }

            let render = {
                title: "E-learner",
                style: "../styles/student.css",
                lessons: docs,
                name: doc.name,
                Science,
                Mathematics,
                SocialStudies,
                English
            }

            if (err) return console.log(`Error: ${err}`);
            res.render("./pages/student.hbs", render);
        });
    });


});


router.post('/signup', (req, res) => {
    let name = `${req.body.firstname} ${req.body.lastname}`;
    let email = req.body.email;
    let password = req.body.password;
    let contact = req.body.contact;
    console.log(contact);

    // Store in db 
    let account = new Account({
        name,
        email,
        contact,
        password
    });

    //Have to add some code for authentication on v2

    account.save((err) => {
        if (err) return console.log(`Error: ${err}`);
        Account.findOne({ email }, (err, doc) => {
            if (err) return console.log(`Error: ${err}`);
            res.redirect(`/student?id=${doc._id}`);
        })

    });

});

router.get('/create', (req, res) => {
    let title = 'Diversity of Living And Non - Living Things';
    let subject = 'science';
    let foreword = "In this lesson, We will explore the world of the living and non-living";
    let topic = [{
        title: "Life Processes",
        explanation: data
    }]
    let lesson = new Lesson({ title, subject, foreword, topic });

    lesson.save((err) => {
        if (err) return console.log(`Error: ${err}`);
        //console.log('Lesson Created');
    });

});

module.exports = router;
const express = require("express");
const {Account, Lesson} = require("../config/model");
const fs = require('fs');

const router = express.Router();

/* let data;
try {
  data = fs.readFileSync(`./routes/life_processes.txt`, 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
} */


router.get("/", (req, res) => {
  res.render("index.hbs", { title: "E-learner", style: "../styles/style.css"});
});


router.get('/lesson', (req, res)=>{

  Lesson.findOne({_id: req.query.less}, (err, doc)=>{
    if(err) return console.log(`Error: ${err}`);

    res.render("./pages/topic.hbs", { 
        title: "E-learner", 
        style: "../styles/topic.css",
        foreword: doc.foreword,
        title: doc.title,
        topic: doc.topic
      });
  });
});


router.get('/student', (req, res)=>{
  if(req.query.id == undefined) return res.redirect('/');

  // finds Lessons from db
  if(req.query.find == undefined){
      Lesson.find({}, (err, docs)=>{
        if(err) return console.log(`Error: ${err}`);
        res.render("./pages/student.hbs", 
          { title: "E-learner", style: "../styles/student.css", lessons: docs});
        });
    }
});


router.post('/signup', (req, res)=>{
  let name = `${req.body.firstname} ${req.body.lastname}`;
  let email = req.body.email;
  let password = req.body.password;
  console.log(Account);

  // Store in db 
  let account = new Account({
    name,
    email,
    password
  });
  
  account.save((err)=>{
    if(err) return console.log(`Error: ${err}`);
    Account.findOne({email}, (err, doc)=>{
      if(err) return console.log(`Error: ${err}`);
      res.redirect(`/student?id=${doc._id}`);
    })
    
  });

});

router.get('/create', (req, res)=>{
  let title = 'Diversity of Living And Non - Living Things';
  let subject = 'Science';
  let foreword = "In this lesson, We will explore the world of the living and non-living";
  let topic = [
    {
      title: "Life Processes",
      explanation: data
    }
  ]  
  let lesson = new Lesson({title, subject, foreword, topic});

  lesson.save((err)=>{
    if(err) return console.log(`Error: ${err}`);
    console.log('Lesson Created');
  });

});

module.exports = router;

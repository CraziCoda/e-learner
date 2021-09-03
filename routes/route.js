const express = require("express");
const Account = require("../config/model");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", { title: "E-learner", style: "../styles/style.css"});
});

router.get('/student', (req, res)=>{
  res.render("./pages/student.hbs", { title: "E-learner", style: "../styles/student.css"});
});
router.get('/lesson', (req, res)=>{
  res.render("./pages/topic.hbs", { title: "E-learner", style: "../styles/topic.css"});
});
router.post('/signup', (req, res)=>{
  let name = `${req.body.firstname} ${req.body.lastname}`;
  let email = req.body.email;
  let password = req.body.password;

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
module.exports = router;

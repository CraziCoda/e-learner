const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", { title: "E-learner", style: "../styles/style.css"});
});

router.get('/student', (req, res)=>{
  res.render("./pages/student.hbs", { title: "E-learner", style: "../styles/student.css"});
});

module.exports = router;

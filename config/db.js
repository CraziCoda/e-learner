const mongoose = require('mongoose');
const remoteMongo =
  "mongodb+srv://crazecode:mongoaccess014@cluster0.saa1c.mongodb.net/e-learner?retryWrites=true&w=majority";
const localMongo = 'mongodb://localhost:27017/e-account';

mongoose.connect(localMongo, (e)=>{
    if(e) return console.log(`Error: ${e}`);
    console.log(`Database connected`);
});

const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}

});

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Title"
    },
    subject: {
        type: String,
        default: ""
    }
    ,
    foreword: {
        type: String,
        default: ""
    },
    topic: {
        type: Array,
        default: []
    }
});

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    explanation: {
        type: String,
        default: ""
    }
});

const Account = mongoose.model('Account', accountSchema);
const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = {Account, Lesson};
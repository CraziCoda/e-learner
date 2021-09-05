const { Account, Lesson } = require("../config/model");

const runSocket = (socket) => {
    socket.on('login', (user) => {
        Account.findOne({ contact: user }, (err, user) => {
            socket.emit('login', user?._id);
        });
    });

    socket.on('findLessonNum', (sub) => {
        Lesson.find({ subject: sub }, (err, lessons) => {
            socket.emit('LessonsNum', { sub, num: lessons.length })
        })
    });

    socket.on('findLessons', (sub)=>{
        Lesson.find({ subject: sub }, (err, lessons) => {
            socket.emit('Lessons', { sub, lessons});
        })
    });
}

module.exports = runSocket;
const { Account, Lesson } = require("../config/model");
const fs = require('fs');
const dir = './assets';


const runSocket = (socket, io) => {
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

    socket.on('a', (a)=>{
        console.log(a);
    });

    socket.on('sendMessage', (message)=>{
        io.sockets.emit('newMessage', message);
    });

    socket.on('viewFiles', ()=> {
        fs.readdir(dir, (err, files) => {
            socket.emit('files', files);
          });
    })
}

module.exports = runSocket;
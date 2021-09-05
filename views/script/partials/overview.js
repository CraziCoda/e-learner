const prog = document.querySelectorAll(".prog");

for (let i = 0; i < prog.length; i++) {
    let sub = prog[i].getAttribute('data-subject');
    /* switch(sub){
        case 'science':
            socket.emit('findLessonNum', sub)
            break;
    } */
    socket.emit('findLessonNum', sub);
}


socket.on('LessonsNum', (obj)=>{
    switch(obj.sub){
        case 'science':
            prog[1].innerHTML = `<span>${obj.num} Lessons</span>`
            break;
        case 'english':
            prog[0].innerHTML = `<span>${obj.num} Lessons</span>`
            break;

        case 'mathematics':
            prog[2].innerHTML = `<span>${obj.num} Lessons</span>`
            break;
        case 'mathematics':
            prog[3].innerHTML = `<span>${obj.num} Lessons</span>`
            break;
        }
});
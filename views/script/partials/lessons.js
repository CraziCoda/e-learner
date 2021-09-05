const content1 = document.querySelector('.content1');
socket.on('Lessons', (obj)=>{
     let lessons = obj.lessons;
     content1.innerHTML = "";
     for(i = 0;i < lessons.length;i++){
         let a = lessons[i];
         console.log(a);
         let str = `<div class="lesson" onclick="openLesson(this);" data-lesson-id="${a._id}"><div class="leftside">
                    <span class="sub small">${a.subject}</span><br><span class="topic">${a.title}</span></div><div class="rightside">
                    <span class="sub-topics">${a.topic.length}</span></div></div>`;
        content1.innerHTML += str; 
     }
     
});

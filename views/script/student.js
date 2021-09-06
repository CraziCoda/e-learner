const navs = document.querySelectorAll('.nav-icon');
const views = document.querySelectorAll('.views');
const subs = document.querySelectorAll('.small');
const lessons = document.querySelectorAll('.lesson')

for(let i = 0;i < navs.length;i++){
    navs[i].addEventListener('click', (e)=>{
        if(i == 3) socket.emit('viewFiles');
        for(let i = 0;i < navs.length;i++){
            navs[i].classList.remove('active');
            views[i].classList.add('disappear');
        }
       changeView(i);
    });

    
}


const changeView = (index) =>{
    switch (index) {
        case 0:
            navs[0].classList.add('active');
            views[0].classList.remove('disappear');
            break;
        case 1:
            navs[1].classList.add('active');
            views[1].classList.remove('disappear');
            break;
        case 2:
            navs[2].classList.add('active');
            views[2].classList.remove('disappear');
            break;
        case 3:
            navs[3].classList.add('active');
            views[3].classList.remove('disappear');
            break;
    }
}

const openLesson = (e) =>{
    let id = e.getAttribute('data-lesson-id');
    location.href = `/lesson?less=${id}`;
}

const sections = document.querySelectorAll('.col-6');

for(let i = 0;i < sections.length;i++){
    sections[i].addEventListener('click', (e)=>{
        let subject = e.target.getAttribute('data-subject')
        for(let i = 0;i < navs.length;i++){
            navs[i].classList.remove('active');
            views[i].classList.add('disappear');
        }

        navs[0].classList.remove('active');
        views[0].classList.add('disappear');

        navs[1].classList.add('active');
        views[1].classList.remove('disappear');

        socket.emit('findLessons', subject);
    });
}






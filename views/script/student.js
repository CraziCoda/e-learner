const navs = document.querySelectorAll('.nav-icon');
const views = document.querySelectorAll('.views');

for(let i = 0;i < navs.length;i++){
    navs[i].addEventListener('click', (e)=>{
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
        case 4:
            navs[4].classList.add('active');
            views[4].classList.remove('disappear');
            break;
    }
}
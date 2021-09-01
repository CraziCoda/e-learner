const signup = document.querySelector('.signup');
const screen1 = document.querySelector('.s1');
const screen2 = document.querySelector('.s2');
const back = document.querySelector('.back');

signup.addEventListener('click', ()=>{
    screen1.classList.add('disappear');
    screen2.classList.remove('disappear');
});

back.addEventListener('click', ()=>{
    screen2.classList.add('disappear');
    screen1.classList.remove('disappear');
});
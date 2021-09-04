const back = document.querySelector('.backbtn');
const items = document.querySelectorAll('.item-list li');
const openLesson = document.querySelector('.open-lesson');
const close = document.querySelector('.close');
const container = document.querySelector('.container-fluid');

 back.addEventListener('click', ()=>{
    history.back();
 });

for(let i = 0;i < items.length;i++){
    let item = items[i];
    item.addEventListener('click', (e)=>{
        // console.log(e.target.getAttribute('data-item'));
        openLesson.style.display = 'block';
        container.style.filter = "blur(8px)"
    });    
}

close.addEventListener('click', ()=>{
    openLesson.style.display = 'none';
    container.style.filter = "";
});
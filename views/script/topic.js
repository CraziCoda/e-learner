const back = document.querySelector('.backbtn');
const items = document.querySelectorAll('.item-list li');
const openLesson = document.querySelector('.open-lesson');
const close = document.querySelector('.close');
const container = document.querySelector('.container-fluid');
const content = document.querySelector(".open-lesson .content");


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

const editText = (text)=>{
    let t1 = text;
    //t1 = t1.replaceAll('&lt;br/&gt;', '<br>');
    t1 = t1.replaceAll('&lt;', '<');
    t1 = t1.replaceAll('&gt;', '>');
    content.innerHTML = t1;
}

editText(content.innerHTML);
const chat = document.getElementById('chat');
const chat_btn = document.getElementById('chat_btn');

chat_btn.addEventListener('click', ()=>{
    let message = chat.value;
    console.log(message);
})
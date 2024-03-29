const chat = document.getElementById('chat');
const chat_btn = document.getElementById('chat_btn');
const view = document.querySelector('.view_chat');
const active = document.querySelector('.user_active span');

chat_btn.addEventListener('click', ()=>{
    let message = chat.value;
    chat.value = "";
    socket.emit('sendMessage', message);
});

socket.on('newMessage', (message)=>{
    //console.log(message);
    view.innerHTML += (`<div class="message"><span>${message}</span></div>`);
})

socket.on('users', (user)=>{
    active.innerHTML = user;
})

const signup = document.querySelector('.signup');
const screen1 = document.querySelector('.s1');
const screen2 = document.querySelector('.s2');
const back = document.querySelector('.back');
const contact = document.getElementById('contact');



signup.addEventListener('click', () => {
    screen1.classList.add('disappear');
    screen2.classList.remove('disappear');
});

back.addEventListener('click', () => {
    screen2.classList.add('disappear');
    screen1.classList.remove('disappear');
});

const registered = (user) => {
    socket.emit('login', user);

}
let msisdn = Ayoba.getMsisdn();


socket.emit('a', msisdn);
if (inAyoba) {
    socket.emit('a', Ayoba);
    let user = getMsisdn();
    socket.emit('a', 'hello2');
    contact.value = user;
    registered(user);
    console.log(inAyoba, user);
    socket.emit('a', user);

} else {
    const Ayoba = new AyobaStub();
    let user = Ayoba.getMsisdn();
    contact.value = user;
    registered(user);
    //socket.emit('a', user);
}

//Socket function
socket.on('login', (id) => {
    if (id != null) return location.href = `/student?id=${id}`;
    console.log(id);
});


//Ayoba functions

const getMsisdn = () => {
    let msisdn = Ayoba.getMsisdn();
    return msisdn
}
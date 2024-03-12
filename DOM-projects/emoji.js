const emojis = ['😂','🤣','😊','😍','😒','😘','💕','😁','👍','🙌','✌️','🤞','😉','😎','😢','😜','😇','🐻'];
const face = document.querySelector('.emoji');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let randomEmoji = Math.floor(Math.random() * emojis.length);
    let result = emojis[randomEmoji];
    face.innerHTML = result;
});

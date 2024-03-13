const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const resetBtn = document.querySelector('.reset');
let score = 0;

const randomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;

    // Update score
    score += random;

    document.getElementById('score').innerText = `Score: ${score}`;

    rollDice(random);
}

const rollDice = random => {
    dice.style.animation = 'rolling 4.5s';

    setTimeout(() => {
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 4050);
}

const resetScore = () => {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
}

rollBtn.addEventListener('click', randomDice);
resetBtn.addEventListener('click', resetScore);
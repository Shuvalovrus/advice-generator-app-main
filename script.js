const API_URL = 'https://api.adviceslip.com/advice';
const adviceText = document.querySelector('.advice__text');
const adviceNumber = document.querySelector('.advice__number');
const button = document.querySelector('.advice__button');
const buttinIcon = document.querySelector('.button__image');

window.onload = renderData();
button.addEventListener('click', () => {
    renderData();
    addDisableButtonTimer(2);
});

async function getData(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch(err) {
        console.log(err);
    }
}

async function renderData() {
    try {
        const data = await getData(API_URL);
        const {id, advice} = data?.slip;

        adviceNumber.innerText = `ADVICE #${id}`;
        adviceText.innerHTML = `&ldquo;${advice}&rdquo;`
    } catch (err) {
        console.log(err);
    }
}

function addDisableButtonTimer (seconds) {
    let buttonTimer = seconds;
    button.disabled = true;
    button.classList.add('button_disable');
    button.innerHTML = buttonTimer;

    const timerId = setInterval(() => {
        buttonTimer--;
        button.innerHTML = buttonTimer;
    }, 1000);

    setTimeout(() => {
        clearInterval(timerId);
        button.classList.remove('button_disable');
        button.innerHTML = buttinIcon.outerHTML;
        button.disabled = false;
    },seconds * 1000);
}



const hora = document.getElementById('hora');
const hrNumber = document.getElementById('hr-number');

const minuto = document.getElementById('minuto');
const minNumber = document.getElementById('min-number');

const segundo = document.getElementById('segundo');
const secNumber = document.getElementById('sec-number');

const interval = 1000;

const relogio = setInterval(function () {

    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    console.log(`${hr}:${min}:${s}`);

    hora.textContent = hr;
    hrNumber.textContent = hr;

    minuto.textContent = min;
    minNumber.textContent = min;

    segundo.textContent = s;
    secNumber.textContent = s;

    changeColor();

}, interval);

function changeColor() {
    let hr = parseInt(hrNumber.textContent);

    if (hr >= 12) {
        document.body.style.backgroundColor = '#FAEFC1';
    }
    if (hr >= 14) {
        document.body.style.backgroundColor = '#AED9E0'
    }

    if (hr >= 15) {
        document.body.style.backgroundColor = '#B3E6CC'
    }

    if (hr >= 17) {
        document.body.style.backgroundColor = '#F4CBD3'
    }

    if (hr >= 20 ) {
        document.body.backgroundColor = '#F06058 '
    }


}

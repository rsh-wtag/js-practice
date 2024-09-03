let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    });

});

let button = document.querySelector('#alert');

function handleClick() {
    alert('It was clicked');
}

button.addEventListener('click', handleClick)

// button.removeEventListener('click', handleClick)

var counter = 1;
var showCounter = () => console.log(counter);

console.log(window.counter);
window.showCounter();

let result = window.confirm("Select?");
console.log(result);


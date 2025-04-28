// events
const Button = document.querySelector('button');

Button.onclick = function(){
    const body = document.querySelector('body');
    body.style.backgroundColor = 'red';
    alert('Hellow');
}

//optimized approch
// 1. ClientX
// 2. ClientY
// 3. target
// 4. Src
//Event Bubbling

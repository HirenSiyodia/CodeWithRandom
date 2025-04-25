// let para = document.getElementById("Para1");

// console.log(para);

// button example 
// let body = document.querySelector('body');
// let toggleButton = document.querySelector('.btn');

// mode = true;

// toggleButton.addEventListener("click", function() {
// if (mode)
// {
//     body.classList.add('bg-light');
//     body.classList.remove('bg-dark');
//     mode = false ;
// }
// else {
//     body.classList.add('bg-dark');
//     body.classList.remove('bg-light');
//     mode = true ;
// }
// })

let body = document.querySelector('body');
let mainButton = document.querySelector('.btn');

mode = false;

mainButton.addEventListener('click', function() {
    if (mode){
        body.classList.add('bg-light');
        body.classList.remove('bg-dark');
        mode =  false;
    }else {
        body.classList.add('bg-dark');
        body.classList.remove('bg-light');
        mode = true;
    }
})



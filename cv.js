window.onload = function() {
let canvas = document.getElementById('stairsCanvas');
let ctx = canvas.getContext("2d");
let img = document.getElementById("stairsImg");

    if (screen.width <= 425) {
        canvas.width = 300;
        ctx.drawImage(img,0,26,300,280); 
    }
    else if (screen.width <= 320) {
        canvas.width = 200;
        ctx.drawImage(img,0,26,300,280); 
    }
    else if (screen.width <= 768) {
        canvas.width = 330;
        ctx.drawImage(img,0,6,50,28);
    }
    else if (screen.width <= 1024) {
        canvas.width = 450;
        ctx.drawImage(img,140,325,257,240); 
    }
    else if (screen.width > 1024) {
        canvas.width = 630;
        ctx.drawImage(img,240,325,257,240);
    }
}








/* 


const canvas = document.getElementById('prosto');
const img = document.getElementById('peps');

let ctx = canvas.getContext('2d');

let isLeftArrowPressed = false,
    isRightArrowPressed = false;

let isUpArrowPressed = false;
isDownArrowPressed = false;

document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 37) {
        isLeftArrowPressed = true;
    }
    if (event.keyCode === 39) {
        isRightArrowPressed = true;
    }
});

document.addEventListener('keyup', function() {
    if (event.keyCode === 37) {
        isLeftArrowPressed = false;
    }
    if (event.keyCode === 39) {
        isRightArrowPressed = false;
    }
});


document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 38) {
        isUpArrowPressed = true;
    }
    if (event.keyCode === 40) {
        isDownArrowPressed = true;
    }
});

document.addEventListener('keyup', function() {
    if (event.keyCode === 38) {
        isUpArrowPressed = false;
    }
    if (event.keyCode === 40) {
        isDownArrowPressed = false;
    }
});

let x = 10,
    y = 50,
    i = 0,
    imgX = 0,
    imgY = 0;



    if (isLeftArrowPressed) {
        imgX--;
    }
    if (isRightArrowPressed) {
        imgX++;
    }

    if (isUpArrowPressed) {
        imgY--;
    }

    if (isDownArrowPressed) {
        imgY++;
    }
*/
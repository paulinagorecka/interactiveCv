
window.onload = function() {

    let canvas = document.getElementById('stairsCanvas');
    let ctx = canvas.getContext("2d");
    let img = document.getElementById("stairsImg");
    let img2 = this.document.getElementById("stairsImg2");

    if (this.screen.width <= 320) {
        canvas.width = 320;
        ctx.drawImage(img2, -21, 285, 340, 310);    
    }
    else if (screen.width <= 375) {
        canvas.width = 370;
        ctx.drawImage(img2, -4, 255, 380, 350);    
    }
    else if (screen.width <= 425) {
        canvas.width = 400;
        ctx.drawImage(img2, 3, 237, 410, 380); 
    }
    else if (screen.width <= 768) {
        canvas.width = 420;
        ctx.drawImage(img, 118, 326, 258, 240);
    }
    else if (screen.width <= 1024) {
        canvas.width = 450;
        ctx.drawImage(img, 140, 326, 257, 240); 
    }
    else if (screen.width <= 1366) {
        canvas.width = 630;
        ctx.drawImage(img, 212, 326, 257, 240);
    }
    else if (screen.width > 1366) {
        canvas.width = 630;
        ctx.drawImage(img, 240, 325, 257, 240);
    }
}

window.onresize = function() { 
    location.reload(); 
}

<<<<<<< HEAD
window.onclick = function() {

    let canvas = document.getElementById('mainCanvas');
    
        if (this.screen.width <= 320) {
            canvas.width = 220;
           //ctx.drawImage(img2, -21, 285, 340, 310);    
        }
        else if (screen.width <= 375) {
            canvas.width = 270;
           // ctx.drawImage(img2, -4, 255, 380, 350);    
        }
        else if (screen.width <= 425) {
            canvas.width = 200;
           // ctx.drawImage(img2, 3, 237, 410, 380); 
        }
        else if (screen.width <= 768) {
            canvas.width = 200;
           // ctx.drawImage(img, 118, 326, 258, 240);
        }
        else if (screen.width <= 1024) {
            canvas.width = 600;
           // ctx.drawImage(img, 140, 326, 257, 240); 
        }
        else if (screen.width <= 1366) {
            canvas.width = 600;
          //  ctx.drawImage(img, 212, 326, 257, 240);
        }
        else if (screen.width > 1366) {
            canvas.width = 630;
          //  ctx.drawImage(img, 240, 325, 257, 240);
        }
    }

$(document).ready(function() {

//const animateStairs = function() {
let $beamLeft = $('.beamLeft');
//let $beamRight = $('.beamRight');
let $background = $('.background');
let $photo = $('.photoIdImg'); 

$('body').click(function() {
    $beamLeft.fadeOut(2500);
   // $beamRight.fadeOut(2500);
    $photo.fadeOut(2500).removeClass('photoIdImg').addClass('photoIdMask');

    setTimeout(function() {
        $background.css('backgroundImage','url(https://i.imgur.com/o6ILxdK.jpg)');
    }, 2000);

    if (screen.width <= 425) {
        $('#stairsCanvas').fadeOut(2000);
    }

   













    
   /*else if (screen.width > 425) {
        animateStairs();
    });
    } */


    });

});

=======
$('body').click(function() {
    $('.background').css('backgroundImage','url(https://i.imgur.com/o6ILxdK.jpg)');
})
>>>>>>> d8f5f9a7ecdd58555d0fdc38ef5febc26e8f8fc5




//var typed = new Typed('.element', {
 //   strings: ["First sentence.", "Second sentence."],
 //   typeSpeed: 30
 // });


/*var typed = new Typed('.mainScreen', {






    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  }); */







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
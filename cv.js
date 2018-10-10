
$(document).ready(function() {

/*window.onload = function() {

    let $canvas = document.getElementById('stairsCanvas');
    let $ctx = $canvas.getContext("2d");
    let $img = document.getElementById("stairsImg");
    let $img2 = document.getElementById('stairsImg2')

        if (this.screen.width <= 320) {
            $canvas.width = 300;
            $ctx.drawImage($img2, -21, 285, 340, 310);    
        }
        else if (screen.width <= 375) {
            $canvas.width = 330;
            $ctx.drawImage($img2, -4, 255, 380, 350);    
        }
        else if (screen.width <= 425) {
            $canvas.width = 400;
            $ctx.drawImage($img2, 3, 237, 410, 380); 
        }
        else if (screen.width <= 768) {
            $canvas.width = 420;
            $ctx.drawImage($img, 118, 326, 258, 240);
        }
        else if (screen.width <= 1024) {
            $canvas.width = 450;
            $ctx.drawImage($img, 155, 326, 250, 239); 
        }
        else if (screen.width <= 1366) {
            $canvas.width = 630;
            $ctx.drawImage($img, 202, 326, 248, 239);
        }
        else if (screen.width > 1366) {
            $canvas.width = 630;
            $ctx.drawImage($img, 245, 327, 249, 239);
        }
}*/

    window.onresize = function() { 
        location.reload(); 
}
   
    window.onclick = function() {

        let $canvas = document.getElementById('stairsCanvas');
        let $ctx = $canvas.getContext("2d");
        let $htmlBall = document.getElementById('htmlBall');
        let $cssBall = document.getElementById('cssBall');
        let $jsBall = document.getElementById('jsBall');
        let $sassBall = document.getElementById('sassBall');
        let $jqueryBall = document.getElementById('jqueryBall');
        let $bootstrapBall = document.getElementById('bootstrapBall');
        let $reactBall = document.getElementById('reactBall');
        let $gitBall = document.getElementById('gitBall');
        let $sqlBall = document.getElementById('sqlBall');
        let $psBall = document.getElementById('psBall');
        
            if (screen.width <= 768) {
                setTimeout(function() {
                    $ctx.drawImage($htmlBall, 165, 253, 42, 42);
                    $ctx.drawImage($cssBall, 203, 274, 42, 42);
                    $ctx.drawImage($jsBall, 242, 298, 42, 42);
                    $ctx.drawImage($jqueryBall, 280, 320, 45, 45);
                    $ctx.drawImage($bootstrapBall, 302, 365, 48, 48);
                    $ctx.drawImage($reactBall, 266, 393, 49, 49);
                    $ctx.drawImage($gitBall, 231, 421, 49, 49);
                    $ctx.drawImage($sqlBall, 195, 457, 49, 49);
                    $ctx.drawImage($psBall, 154, 488, 51, 51);
                    //$ctx.drawImage($sassBall, 107, 528, 51, 51);
                }, 3000); 
            }
            else if (screen.width <= 1024) {
                setTimeout(function() {
                    $ctx.drawImage($htmlBall, 185, 250, 47, 47);
                    $ctx.drawImage($cssBall, 223, 271, 47, 47);
                    $ctx.drawImage($jsBall, 265, 295, 47, 47);
                    $ctx.drawImage($jqueryBall, 307, 318, 50, 50);
                    $ctx.drawImage($bootstrapBall, 322, 363, 52, 52);
                    $ctx.drawImage($reactBall, 286, 391, 52, 52);
                    $ctx.drawImage($gitBall, 251, 420, 54, 54);
                    $ctx.drawImage($sqlBall, 208, 451, 54, 54);
                    $ctx.drawImage($psBall, 167, 482, 56, 56);
                    //$ctx.drawImage($sassBall, 120, 522, 56, 56);
                }, 3000); 
            }
            else if (screen.width <= 1366) {
                setTimeout(function() {
                    $ctx.drawImage($htmlBall, 235, 252, 47, 47);
                    $ctx.drawImage($cssBall, 273, 273, 47, 47);
                    $ctx.drawImage($jsBall, 317, 298, 47, 47);
                    $ctx.drawImage($jqueryBall, 357, 318, 50, 50);
                    $ctx.drawImage($bootstrapBall, 372, 363, 52, 52);
                    $ctx.drawImage($reactBall, 336, 391, 52, 52);
                    $ctx.drawImage($gitBall, 301, 420, 54, 54);
                    $ctx.drawImage($sqlBall, 258, 451, 54, 54);
                    $ctx.drawImage($psBall, 217, 482, 56, 56);
                    //$ctx.drawImage($sassBall, 170, 522, 56, 56);
                }, 3000);
            }
            else if (screen.width > 1366) {
                setTimeout(function() {
                    $ctx.drawImage($htmlBall, 265, 249, 47, 47);
                    $ctx.drawImage($cssBall, 303, 270, 47, 47);
                    $ctx.drawImage($jsBall, 348, 291, 47, 47);
                    $ctx.drawImage($jqueryBall, 387, 318, 50, 50);
                    $ctx.drawImage($bootstrapBall, 402, 365, 52, 52);
                    $ctx.drawImage($reactBall, 366, 391, 52, 52);
                    $ctx.drawImage($gitBall, 331, 422, 54, 54);
                    $ctx.drawImage($sqlBall, 288, 449, 54, 54);
                    $ctx.drawImage($psBall, 247, 482, 56, 56);
                    //$ctx.drawImage($sassBall, 197, 522, 56, 56);
                }, 3000); 
            }
}

//let $beamLeft = $('.beamLeft');
//let $beamMiddle = $('.beamMiddle');
let $background = $('.background');
let $photo = $('.photoIdImg'); 
let $photoIdToggle = $('.photoIdToggle');
let $plantImg = $('.plantImg');
let $plantImg2 = $('.plantImg2');

$('body').one('click', function() {
   // $beamLeft.fadeOut(1500);
   // $beamMiddle.fadeOut(1500);
    $photo.fadeOut(1800).toggleClass('photoIdToggle');

    if (screen.width <= 424) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/VO7Pcha.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1700); 
    }
    else if (screen.width <= 769) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/8NR5cen.png?2), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1700); 
    }
    else if (screen.width >= 1024) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/0Z1E4Ap.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1700); 
    }
    else if (screen.width >= 1366) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/bFRdmfT.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1700);
    }
    else if (screen.width >= 770) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/YvneonB.png?2), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1700); 
    }
    
    

    var typed = new Typed('#typed', {
        stringsElement: '#typedStrings',
        typeSpeed: 35
        });

});

$photoIdToggle.click(function() {
    $photoIdToggle.toggleClass('photoIdImg');
})

$plantImg.click(function() {
    $plantImg.toggleClass('plantImgToggle');
})

$plantImg2.click(function() {
    $plantImg2.toggleClass('plantImg2Toggle');
})

});


/*
let $img = document.getElementById("stairsImg");
$img.animate({ "right": "+=50px" }, 1500 );

    }); 



let $cssBall = $('#cssBall');
$('body').click(function() {
setTimeout(function() {
    $cssBall.fadeOut(2000);
}, 7700);             
})  */

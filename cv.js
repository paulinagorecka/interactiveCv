
$(document).ready(function() {

window.onload = function() {

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
}

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
        
            if (screen.width <= 320) {
                 
            }
            else if (screen.width <= 375) {
                  
            }
            else if (screen.width <= 425) {
                
            }
            else if (screen.width <= 768) {
             
            }
            else if (screen.width <= 1024) {
                
            }
            else if (screen.width <= 1366) {
                setTimeout(function() {
                    $ctx.drawImage($htmlBall, 235, 252, 47, 47);
                    $ctx.drawImage($cssBall, 273, 273, 47, 47);
                    $ctx.drawImage($jsBall, 318, 298, 47, 47);
                    $ctx.drawImage($jqueryBall, 357, 318, 50, 50);
                    $ctx.drawImage($bootstrapBall, 372, 365, 50, 50);
                    $ctx.drawImage($reactBall, 336, 391, 52, 52);
                    $ctx.drawImage($gitBall, 301, 422, 54, 54);
                    $ctx.drawImage($sqlBall, 258, 451, 54, 54);
                    $ctx.drawImage($psBall, 217, 482, 56, 56);
                    $ctx.drawImage($sassBall, 167, 523, 56, 56);
                }, 3000);
            }
            else if (screen.width > 1366) {
               /* setTimeout(function() {
                    $ctx.drawImage($htmlBall, 265, 252, 47, 47);
                    $ctx.drawImage($cssBall, 303, 273, 47, 47);
                    $ctx.drawImage($jsBall, 345, 298, 47, 47);
                    $ctx.drawImage($jqueryBall, 380, 317, 50, 50);
                    $ctx.drawImage($sassBall, 340, 339, 50, 50);
                    $ctx.drawImage($bootstrapBall, 302, 365, 50, 50);
                    $ctx.drawImage($reactBall, 258, 391, 52, 52);
                    $ctx.drawImage($gitBall, 212, 422, 54, 54);
                    $ctx.drawImage($sqlBall, 164, 455, 54, 54);
                    $ctx.drawImage($psBall, 113, 490, 56, 56);
                }, 3000); */
            }            
}

let $beamLeft = $('.beamLeft');
let $beamMiddle = $('.beamMiddle');
let $background = $('.background');
let $photo = $('.photoIdImg'); 

$('body').click(function() {
    $beamLeft.fadeOut(1500);
    $beamMiddle.fadeOut(1500);
    $photo.fadeOut(2500).removeClass('photoIdImg').addClass('photoIdMask');

    setTimeout(function() {
        $background.css('backgroundImage','url(https://i.imgur.com/o6ILxdK.jpg)');
    }, 1700);

    if (screen.width <= 425) {
        $('#stairsCanvas').fadeOut(2000);
    }

var typed = new Typed('#typed', {
    stringsElement: '#typedStrings',
    typeSpeed: 35
      });
}); 
});
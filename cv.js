$(document).ready(function() {

//let $beamLeft = $('.beamLeft');
//let $beamMiddle = $('.beamMiddle');
let $pulseGif = $('.pulseGif');
let $background = $('.background');
let $photoId = $('.photoIdImg'); 
let $photoIdToggle = $('.photoIdToggle');
let $skipIntro = $('.skipIntroButton');

let $skills = $('.skills');
let $htmlBall = $('.htmlBall');
let $cssBall = $('.cssBall');
let $jsBall = $('.jsBall');
let $sassBall = $('.sassBall');
let $jqueryBall = $('.jqueryBall');
let $bootstrapBall = $('.bootstrapBall');
let $reactBall = $('.reactBall');
let $gitBall = $('.gitBall');
let $sqlBall = $('.sqlBall');
let $psBall = $('.psBall');

let $contactMe = $('.contactMeButton');
let $plantImg = $('.plantImg');
let $plantImg2 = $('.plantImg2');
let $formExitButton = $('.formExitButton');
let $contactForm = $('#contactForm');
let $topEdgePanel = $('.topEdgePanel');
let $bottomEdgePanelGreen = $('.bottomEdgePanelGreen');


$('body').one('click', function() {
   // $beamLeft.fadeOut(1500);
   // $beamMiddle.fadeOut(1500);
    $pulseGif.fadeOut(500);
    $photoId.fadeOut(1800).toggleClass('photoIdToggle');

    if (screen.width <= 424) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/jXMSkVl.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1200); 
    }
    else if (screen.width <= 769) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/yPY1AWm.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1200); 
    }
    else if (screen.width <= 1023) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/CqeWz9c.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1200); 
    } 
    else if (screen.width <= 1363) {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/c5SvPV8.png), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1200); 
    }
    else {
        setTimeout(function() {
            $background.css('backgroundImage','url(https://i.imgur.com/dSKMukN.png?1), url(https://i.imgur.com/o6ILxdK.jpg)');
            }, 1200);
    }
    
    var typed = new Typed('#typed', {
        stringsElement: '#typedStrings',
        typeSpeed: 25
    });

    setTimeout(function() {
        $skipIntro.fadeIn(1200);
      //  }, 9700); //here change button delay
          }, 1000);

    if (screen.width > 770) {
        setTimeout(function() {
            $skills.fadeIn(2300);
        }, 23000); 
    }     

});

$skipIntro.click(function() {
    $('#typed').fadeOut(1000);
        $skipIntro.fadeOut(1200);

    setTimeout(function() {
        $contactMe.fadeIn(1200);
    }, 2000);

    if (screen.width > 770) {    
        setTimeout(function() {
            $skills.fadeIn(2300);
    }, 1000); 
    }     
});

$photoIdToggle.click(function() {
    $photoIdToggle.toggleClass('photoIdImg');
});

$plantImg.click(function() {
    $plantImg.toggleClass('plantImgToggle');
});

$plantImg2.click(function() {
    $plantImg2.toggleClass('plantImg2Toggle');
});

$topEdgePanel.click(function() {

    $(this).toggleClass('topEdgePanelToggle');

   /* if ($(this).hasClass('topEdgePanel')) {
        ($(this).removeClass('topEdgePanel').addClass('topEdgePanelToggle1'));
    } 
    else if ($(this).hasClass('topEdgePanelToggle1')) {
        ($(this).removeClass('topEdgePanelTogglel').addClass('topEdgePanelToggle2'));
    }
    else {
        ($(this).addClass('topEdgePanel'));
    }
   */

});

$bottomEdgePanelGreen.click(function() {
    $bottomEdgePanelGreen.toggleClass('bottomEdgePanelGreenToggle'); 
});

$htmlBall.click(function() {
    $htmlBall.toggleClass('htmlBallColor');
});

$cssBall.click(function() {
    $cssBall.toggleClass('cssBallColor');
});

$jsBall.click(function() {
    $jsBall.toggleClass('jsBallColor');
});

$sassBall.click(function() {
    $sassBall.toggleClass('sassBallColor');
});

$jqueryBall.click(function() {
    $jqueryBall.toggleClass('jqueryBallColor');
});

$bootstrapBall.click(function() {
    $bootstrapBall.toggleClass('bootstrapBallColor');
});

$reactBall.click(function() {
    $reactBall.toggleClass('reactBallColor');
});

$gitBall.click(function() {
    $gitBall.toggleClass('gitBallColor');
});

$sqlBall.click(function() {
    $sqlBall.toggleClass('sqlBallColor');
});

$psBall.click(function() {
    $psBall.toggleClass('psBallColor');
});

$contactMe.click(function() {
    $contactForm.fadeIn(600);
});

$formExitButton.click(function() {
    $contactForm.fadeOut(600);
});

});



/*
    window.onresize = function() { 
        location.reload(); 
}


let $cssBall = $('#cssBall');
$('body').click(function() {
setTimeout(function() {
    $cssBall.fadeOut(2000);
}, 7700);             
})  */

$(document).ready(function() {

let $pulseGif = $('.pulseGif');
let $background = $('.background');
let $photoId = $('.photoIdImg'); 
let $photoIdToggle = $('.photoIdToggle');
let $skipIntro = $('.skipIntroButton');
let $showIntro = $('.showIntroButton');
let $showResume = $('.showResumeButton');
let $intro = $('.intro');
let $resume = $('.resume');
let $nextIcon = $('.nextIcon');
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
let $bottomEdgePanel = $('.bottomEdgePanel');


$('body').one('click', function() {
    $pulseGif.fadeOut(500);
    $photoId.fadeOut(1800).toggleClass('photoIdToggle');

    if (screen.width <= 424) {
        setTimeout(function() {
            $background.css('backgroundImage','url(img/backgrounds/b_max424px.png), url(img/backgrounds/darkScreen.jpg)');
            }, 1200); 
    }
    else if (screen.width <= 769) {
        setTimeout(function() {
            $background.css('backgroundImage','url(img/backgrounds/b_max769px.png), url(img/backgrounds/darkScreen.jpg)');
            }, 1200); 
    }
    else if (screen.width <= 1023) {
        setTimeout(function() {
            $background.css('backgroundImage','url(img/backgrounds/b_max1023px.png), url(img/backgrounds/darkScreen.jpg)');
            }, 1200); 
    } 
    else if (screen.width <= 1363) {
        setTimeout(function() {
            $background.css('backgroundImage','url(img/backgrounds/b_max1363px.png), url(img/backgrounds/darkScreen.jpg)');
            }, 1200); 
    }
    else {
        setTimeout(function() {
            $background.css('backgroundImage','url(img/backgrounds/b_min1364px.png), url(img/backgrounds/darkScreen.jpg)');
            }, 1200);
    }
    
    var typed = new Typed('#typed', {
        stringsElement: '#typedStrings',
        typeSpeed: 25
    });

    setTimeout(function() {
        $skipIntro.fadeIn(1200);
        $showIntro.fadeIn(1200);
    }, 1000);

});

$skipIntro.click(function() {
    $(this).fadeOut(1200);
    $('#typed').fadeOut(1000);
    $intro.fadeOut(1200);
    $resume.fadeIn(1200);

    setTimeout(function() {
        $contactMe.fadeIn(1200);
    }, 2000);

    if (screen.width > 770) {    
        setTimeout(function() {
            $skills.fadeIn(2300);
        }, 1000); 
    }     
});

$showIntro.click(function() {
    $(this).fadeOut(1000);
    $('#typed').fadeOut(1000);
    $resume.fadeOut(1000);
    $intro.fadeIn(1000);
    $skipIntro.fadeOut(1000);
    $contactMe.fadeIn(1000);
    $showResume.fadeIn(1000);

    if (screen.width > 770) {    
        setTimeout(function() {
            $skills.fadeIn(2300);
        }, 1000);   
    }
});

$showResume.click(function() {
    $(this).fadeOut(1000);
    $intro.fadeOut(1000);
    $resume.fadeIn(1000); 
    $skipIntro.fadeOut(1000);
    $contactMe.fadeIn(1100);
    $showIntro.fadeIn(1000);

    if (screen.width > 770) {    
        setTimeout(function() {
            $skills.fadeIn(2300);
        }, 1000); 
    }     
});

$nextIcon.click(function() {
    $resume.toggleClass('resume2'); 
});

$photoIdToggle.click(function() {
    $(this).toggleClass('photoIdImg');
});

$plantImg.click(function() {
    $(this).toggleClass('plantImgToggle');
});

$plantImg2.click(function() {
    $(this).toggleClass('plantImg2Toggle');
});

$topEdgePanel.click(function() {
    $(this).toggleClass('topEdgePanelToggle');
});

$bottomEdgePanel.click(function() {
    $(this).toggleClass('bottomEdgePanelToggle'); 
});

$htmlBall.click(function() {
    $(this).toggleClass('htmlBallColor');
});

$cssBall.click(function() {
    $(this).toggleClass('cssBallColor');
});

$jsBall.click(function() {
    $(this).toggleClass('jsBallColor');
});

$sassBall.click(function() {
    $(this).toggleClass('sassBallColor');
});

$jqueryBall.click(function() {
    $(this).toggleClass('jqueryBallColor');
});

$bootstrapBall.click(function() {
    $(this).toggleClass('bootstrapBallColor');
});

$reactBall.click(function() {
    $(this).toggleClass('reactBallColor');
});

$gitBall.click(function() {
    $(this).toggleClass('gitBallColor');
});

$sqlBall.click(function() {
    $(this).toggleClass('sqlBallColor');
});

$psBall.click(function() {
    $(this).toggleClass('psBallColor');
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
} */

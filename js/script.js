/**
 * Created by dimmy on 23-10-2015.
 */

$(document).ready(function () {

    $('#product').click(function(){
        $('body').animate({
            scrollTop: $('.room-container').offset().top},500);
    });

    $('#home').click (function(){
        $('body').animate({
            scrollTop: $('.summary-container').offset().top},500);
    });

    $('.logo').click (function(){
        $('body').animate({
            scrollTop: $('.summary-container').offset().top},500);
    });


    var counterRoom = 0;
    function check(){
        if(counterRoom == 0){
            $("#left").animate({"opacity": 0}, 'fast');
        }
        else{
            $("#left").animate({"opacity": 1}, 'fast');
        }

        if(counterRoom == 4){
            $("#right").animate({"opacity": 0}, 'fast');
        }
        else{
            $("#right").animate({"opacity": 1}, 'fast');
        }
    };



    $("#right").click(function () {
        if(counterRoom < 4){
            $(".room-container").animate({"marginLeft": "-=387.25px"}, 'slow');
            counterRoom++;
            check();
        }

    });

    $("#left").click(function () {
        if(counterRoom > 0){
            $(".room-container").animate({"marginLeft": "+=387.25px"}, 'slow');
            counterRoom--;
            check();
        }

    });

    function lightsOn(){
        $('.filter').animate({
            "zIndex": 0
        });
        $('.switch-on').animate({
            "opacity" : 1
        });
        $('.light-on').animate({
            "opacity" : 1
        });
    }

    function lightsOff(){
        $('.filter').animate({
            "zIndex": 1
        });
        $('.switch-on').animate({
            "opacity" : 0
        });
        $('.light-on').animate({
            "opacity" : 0
        });
    }

    var counterLight = 0;

    $('.switch').click(function(){
        if(counterLight == 0){
            lightsOn();
            counterLight++;
        }
        else{
           lightsOff();
            counterLight--;
        };
    })

    if($('#slim-thing').mouseenter(function(){
        $(".slim-on").stop().animate({
            "opacity": 1
        })
    }));

    $('#slim-thing').mouseleave(function(){
        $(".slim-on").stop().animate({
            "opacity": 0
        })
    })

    function appearInfo(){
        $('.filter').animate({
            "zIndex": 5
        });

        $('.info-container').animate({
            "opacity": 1
        });
    }

    function disappear(){
        $(".info-article").animate({
            "opacity": 0,
        })

        $('.info-container').animate({
            "opacity": 0
        })

        $('.filter').animate({
            "zIndex": 0,
        });

    }

    $('#motion-sensor').click(function(){
        appearInfo();
        $("#article-one").animate({
            "opacity": 1
        })
    });

    $('#slim-thing').click(function(){
        appearInfo();
        $("#article-two").animate({
            "opacity": 1
        })
    });

    $('#temp-air').click(function(){
        appearInfo();
        $("#article-three").animate({
            "opacity": 1
        })
    });

    $('#lightsensor').click(function(){
        appearInfo();
        $("#article-four").animate({
            "opacity": 1
        })
    });

    $(".exit").click(function(){
        disappear();
    })
});


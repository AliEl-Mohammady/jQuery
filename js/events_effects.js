$(document).ready(function(){
    $('.box').click(function(){
        $(this).css('background-color', 'blue');
    });

    $('.box').animate({
        height: '1000px',
        width: '1000px'
    }, 2000);


    $('.box').animate({
        fontSize: '50px',
        height: '-=600px',
        width: '600px'
    }, 2000).stop();


    $('.box').animate({
        fontSize: '10px',
        height: '+=200px',
        border: '5px solid red'
    }, 2000);

    $('button').click(function(){
        // $('.box').stop( 'default is False stop  current animation', true :go to end );
        $('.box').stop(false,true);

    });

});
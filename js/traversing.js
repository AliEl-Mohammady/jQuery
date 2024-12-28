
$(document).ready(function(){
    $('.child').parent().css({borderColor:'red',padding:'10px',margin:'10px'});
    $('.child').parents().css({borderColor:'red'});
    // $('.child').parents('.superGrandF').css({borderColor:'red'});
    $('.child').parentsUntil('.superGrandF').css({borderColor:'red'});

    $('.superGrandF').children().css({borderColor:'blue'});

    $('.superGrandF').children(".grandF").css({borderColor:'black'});  //direct child only

    $('.superGrandF').find(".child").css({borderColor:'black'});  //direct child only

    $(".sibling,p").click(function(){
        $(this).siblings().css("border","3px solid red").slideToggle(1000);
        $(this).siblings(".choosen").css("border","3px solid red").slideToggle(1000);
        $(this).next("p").css("border","3px solid red");
        $(this).prev("p").css("border","3px solid red");
        $(this).prev().css("border","3px solid red");

        $(this).nextAll("div").css("border","3px solid red");
        $(this).prevAll("div").css("border","3px solid red");

        $(this).nextUntil("p").css("border","3px solid red");
        $(this).prevUntil("p").css("border","3px solid red");
    });

    $(".last").click(function(){
        $(".last").last().css("border","3px solid red");
        $(".last").first().css("border","3px solid red");
        $(".last").eq(-2).css("border","3px solid red");
        $(".last").filter(function(){return $(this).text() === "Second element"}).css("background","red");
        $(".last").not(function(){return $(this).text() === "First element"}).css("background","blue");
    });

    




});

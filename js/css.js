$(document).ready(function(){

    $(".addClass").click(function(){
        $(this).addClass("selected test");

    });

    $(".addClass").dblclick(function(){
        $(this).removeClass("selected");
    });

    $(".addClass").hover(function(){
        $(this).toggleClass("test");
    });

    $("#cssPropertiesButton").click(function(){
        var color=$("#cssProperties").val();
        console.log(color);
        $(".cssProperties").css("background-color",color);
        $(".cssProperties").css({
            width:"500px",
            fontSize:"25px"
        });

    })

    $("#cssProperties").val($(".addClass").css("border-radius"));


    //Dimensions
    $(".dimension").click(function(){
        $(this).width("+="+"50px");
        $(this).height("+="+"50px");

        // $(this).width("-="+"25px");
        $(this).height("-="+"25px");

        $(this).innerWidth("+="+"50px");
        $(this).innerHeight("+="+"50px");
        console.log($(this).innerWidth());
        $(this).outerWidth("-="+"25px");
        $(this).outerHeight("-="+"25px");
    });

    


});
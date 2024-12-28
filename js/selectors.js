
$(document).ready(function(){

    // $("p *").css("border", "1px solid red");
    // $(".test").css("border", "1px solid red");
    // $("#cssProperties").css("border", "1px solid red");
    // $("div:last").css("border", "5px solid red");
    // $("div:first").css("border", "5px solid red");
    // $(".sibling:odd,.last:even").css("background", "white");
    // $(".selector p:first").css("border", "1px solid red");
    // $(".selector div:first-child").css("border", "1px solid red");
    // $(".selector div:last-child").css("border", "1px solid red");
    // $(".selector div:last").css("border", "1px solid red");
    // $(".selector p:first-of-type").css("border", "1px solid red");
    // $(".selector p:last-of-type").css("border", "1px solid red");
    // $(".selector div:nth-child(1)").css("border", "1px solid red");
    // $(".selector div:nth-last-child(3)").css("border", "1px solid red");
    // $(".selector div:nth-of-type(2)").css("border", "1px solid red");

// $("div:only-child").css("border", "4px solid green");
// $("div:only-of-type").css("border", "4px solid green");
// $("div > p").css("border", "4px solid green");
// $("div + p").css("border", "4px solid green");

// $("div ~ p").css("border", "4px solid green"); 
// $("div :eq(0)").css("border", "4px solid green");
// $("div :lt(2)").css("border", "4px solid green");
// $("div :not(:eq(3))").css("border", "4px solid green");

    $('.box').animate({
            width: '+=200px',
            border: '5px solid red'
        }, 2000);
    
    // $(":header").css("border", "1px solid red");
    // $(":input").css("border", "1px solid red");
    // $(":button").css("border", "1px solid red");
    // $(":animated").css("background", "rgb(170, 176, 176)");
    // $("input:focus").css("border", "3px solid black");
    // $(":hidden").css("background", "red");
    // $(':empty').css("background", "red");
    // $(':parent').css("background", "red");
    // $(":visible").css("background", "red");
    // $(":root").css("background", "red");
    // $("div : has(p)").css("background","green");
    // $("div : has('div')").css("background","green");

    // $("[new='new']").css("background", "red");
    // $("p[id='attr']").css("background", "red");
    // $("p[class!='attribute']").css("background", "red"); 
    // $("p[class*='att']").css("background", "red");
    // $("p[class~='att']").css("background", "red");
    
    $(":input").css("border", "1px solid red");
    $(":button").css("border", "1px solid red");
    $(":text").css("font-size", "20px");
    $(":password").css("font-size", "20px");
    $(":disabled").fadeOut(2500);
    $(":enabled").animate({width:"150px"})




});

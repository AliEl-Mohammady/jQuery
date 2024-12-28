$(document).ready(function(){
    
    console.log($(".text").text());
    console.log($(".text").html());
    
    $(".text").html("<span>New text using jQuery </span>");
    $(".text").text("<span>New text using jQuery </span>");

    $("#val").click(function(){
        $(".val").text($("input").val());
        $("input").val($("#val").attr("class"));
    });

    $("#val").attr("class","Ali");

    $(".append").append(" From jQuery using append");
    $(".append").prepend("Using preppend ");
    $(".append").after("<p>Using after</p>");
    $(".append").before("<p>Using before</p>");

    $("<p>Using prependTo verses</p>").prependTo(".append");
    $("<p></p>",{text:"Using appendTo",class:"test"}).appendTo(".append");

    // $(".test").empty();
    // $(".test").remove();
    $("p").click(function(){ $(this).remove(":contains('append')"); });


});
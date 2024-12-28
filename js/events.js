$(document).ready(function(){
    $("#bind").bind( "click", function() {
        // alert( "You clicked the submit button!" );
        $('input[type="email"]').val("ali010@gmail.com");
    });

    // $(":text").bind( "click mouseleave mouseenter", function() {
    //     $(this).addClass("aliE");
    // });

    //custom event
    $(":text").bind( "ali", function() {
        $(this).addClass("aliE");
    });

    $(":text").trigger("ali");
    
    $("#bind").bind( "ali", function(event,name,age) {
        alert("Name: " + name + " Age: " + age);
    });

    $("#bind").click(function() {
        $(this).trigger("ali",$("input[type='text']").val(),$("input[type='number']").val);
    });

    //live("event", selector, data, fn) :not used in updated versions
    // $("#bind").next().live("click", function() {  
    //     alert( "You clicked the LIve button!" );

    //DElegate(selector, eventType, fn)

    $("body").delegate("#delegate", "click", function() {
        alert( "You clicked the delegate button!" );
    });

    //single event
    $(".on").on("click", function() {
        $(this).css({
            border: "2px solid red",
            width: "300px",
            borderRadius: "5px"
        });
    });
    //multiple events
    $(".on").on("mouseenter mouseleave", function() {
        $(this).css({
            color:"green"
        });
    });
    $(".on").on({
        mouseenter: function() {
            $(this).css({
                color:"green"
            });
        },
        mouseleave: function() {
            $(this).css({
                color:"red"
            });
        }
    });
    //custom event
    $(".on").on("ali", function(event , name,age) {
        ($(this)).after("<p class='future'>Hello" + name + " your age is  " + age + "</p>");
    })
    $(".createOn").click(function() {
        $(".on").trigger("ali",["Ali", 20]);
    });
    //deal with future elements
    $("body").on("click", ".future", function() {
        $(this).fadeOut(3000);
    })

    //prevent default
    $("a").on("click", function(event) {
        event.preventDefault();
        if (event.isDefaultPrevented()) {
            $(this).after("<p class='future'>Default is prevented</p>");
            $(this).siblings("div").fadeToggle(3000);
        }
        else {
            alert("Default is not prevented");
        }
    })

    // $(".inputKey").on("keydown", function() {
    //     $(".key").text($(this).val());
    // })

    $(".inputKey").on("keyup", function() {
        $(".key").text($(this).val());
    })

    $(".inputKey").on("keyup", function() {
        $(".key").text($(this).val());
    })

    $("select").on("change", function() {
        $("textarea").text("You chose: "+$(this).val());
    })

    $(".focus").on("focus", function() {
        $(".blur").text("please Enter more than 5 characters").fadeIn(3000);
    })

    $(".focus").on("blur", function() {
        if ($(this).val().length < 5) {
            $(".blur").text("You entered less than 5 characters, please try again");
        }
        else {
            $(".blur").text("Successfully text ").fadeOut(3000);
        }
    })

    $(".selectEvent").on("click", function() {$(this).select();})
    $(".selectEvent").select(function() {
        $(this).css({border: "2px solid red",});});


    // $("li section").height($(window).height()).css("background-color", "green");
    // $(window).on("resize", function() {
    //     console.log($(window).height());
    //     $("li section").height($(window).height())
    // })

    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 1000) {$(".scrool").fadeIn();
        } else {$(".scrool").fadeOut();}});

    $("html").mouseleave(function(e) {
        console.log(e.pageX,e.pageY);
    })
    $(document).on("click", function(e) {
        $(".pageX").text(e.pageX + " left and " + e.pageY + " top").fadeIn(2000).css({
            position: "absolute",
            left: e.pageX,
            top: e.pageY
        }).fadeOut(1000);
    });

    $("form").on("submit", function(e) {
        if ($("form input[type='text']").val() == "Ali El-mohammady") {
            $(this).after("<p>Right username</p>")
            return;
        }
        $("form input[type='text']").after("<p>Wrong username</p>")
        e.preventDefault();
        
    })

    $("#clone").prev().on("click", function() {
            $(this).css({
                border: "2px solid red",
            });
        })

    $("#clone").on("click", function() {
        // $(this).prev().clone(true).appendTo("body"); //True for deep cloning  take everything which means including attributes and event 
        $(this).prev().clone(false).appendTo("body");})  //False for shallow cloning take only attributes

    var detach=$(".detach");
    $('#detach').on("click", function() {
        detach.detach();
    })

    $('#add').on("click", function() {
        $("body").append(detach);
    })
    detach.click(function() {
        $(this).css({
            border: "2px solid red",
        });
    })

    $("div").each(function(index) {
        if ($(this).hasClass("detach")) {
            $(this).css({background: "yellow",width:"200px"});
        }
    })

    $(".scrool").offset({
        top: 850,
        left: 900
    })
    console.log($(".detach").offset());
    console.log($(".detach").position());

    $(".inputKey").prop({
        "name": "ali",
        "disabled": "true"
    })
    console.log($(".scrool").prop("class"));
    console.log($(".scrool").prop("style"));

    $(".replaceWith").on("click", function() {
        $(this).replaceWith("<input id='inputReplace' type='text' value='"+$(this).text()+"'>");
        $("#replace").fadeIn(2000);
    })

    $("#replace").on("click", function() {
        $("#inputReplace").replaceWith("<div class='replaceWith'>"+$("#inputReplace").val()+"</div>");
        $(this).fadeOut(2000); })

    $(".scrool").on("click", function() {
        $(window).scrollTop($("form").offset().top);
        $(window).scrollTop(0);})

    $("#addParent").on("click", function() {
        $(".wrap").wrap("<div class='parent'></div>");})
    $("#removeParent").on("click", function() {
        $(".wrap").unwrap();})

    $("li").has("div,p").has(".has").css({
        border: "2px solid red",
    });

    $("span").on("click", function() {
        if ($(this).is("span")) {
            $(this).css({border: "2px solid red",});}
        if ($(this).is(".has")) {
            $(this).css({});}
        if ($(this).is(":first-child")) {
            $(this).css({fontSize: "30px",});}
        if ($(this).is(":contains('by Ali')")) {
            $(this).css({paddingLeft: "30px",});}})

    $(".end").find("span").css({color: "red",}).end().css({color: "blue",});

    
});


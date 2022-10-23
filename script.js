let accepted_url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

$(".icon-menu").click(function (e) { 
    e.preventDefault();
   $(".nav-list").toggle();
});

$("#Shorten").click(function (e) { 
    e.preventDefault();
    let url = $(".url-text").val();
    
    if (url != accepted_url) {
        $(".url-text").css({"outline": "2px solid red",  });
        $(".info-message").html("Please add a link");
        $(".info-message").css({"font-size":"14px"});
    } else {
        alert("match");
    } 
});

let accepted_url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

$(".icon-menu").click(function (e) { 
    e.preventDefault();
   $(".nav-list").toggle();
});

$("#Shorten").click(function (e) { 
    e.preventDefault();
    let url = $(".url-text").val();
    
    if (url != accepted_url) {
        $("#Shorten").css("border", "2px solid red");
    } else {
        alert("match");
    } 
});
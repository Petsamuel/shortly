let url_format =
  /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;


$(".icon-menu").click(function (e) {
  e.preventDefault();
  $(".nav-list").toggle();
});

$("#Shorten").click(function (e) {
 let url_input = $("#url-text").val();
    if (url_format.exec(url_input)) {
        $(".on-response").show("");
       
       $(".response-header").html(url_input);
        
    } else {
        $(".info-message").html("Please add a link");
        $(".url-text").css({"outline": "2px solid red"});
    }
});

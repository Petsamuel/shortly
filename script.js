$(".icon-menu").click(function (e) {
  e.preventDefault();
  $(".nav-list").toggle();
});

$("#Shorten").click(function (e) {
  e.preventDefault();
  var url_input = $("#url-text").val();
  if ((url_input)) {
    $.post(
      "https://api.shrtco.de/v2/shorten/",
      { url: `${url_input}` },
      function (data, textStatus) {
        var data_res = data["result"]["full_short_link"];
        (function (url_input, shorten_url) {
          $(".on-response")
            .append(`
            <div class="response_container">
            <div class="input_url">${url_input}</div>
                <div class="hr">
  
                  <div class="url_shorten_link">${shorten_url}asdasasas</div>
                  <input class="Copy" type="button" value="Copy" id="Copy" />
                </div>
              <div>
            `);
        }
          (url_input, data_res));
      },
      "json"
    );
  } else {
    $(".info-message").html("Please add a link");
    $(".url-text").css({ outline: "2px solid red" });
  }
});

$("#url-text").keypress(function (e) {
  (function () {
    $(".url-text").css({ outline: "none" });
    $(".info-message").html("");
  }());
});


$("#Copy").click(function (e) {
  e.preventDefault();
  navigator.clipboard.writeText(shorten_url);
  $("#Copy").val("Copied");
  alert("hello")

});

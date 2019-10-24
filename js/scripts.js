$(document).ready(function() {
  $(".button").click(function(event) {
    var messageInput = $("#message").val();

    $(".shout").text(messageInput.toUpperCase());
    $(".image").show();

    event.preventDefault();
  });

});

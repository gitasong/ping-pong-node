var apiKey = "e542d99a4ac0c863239f1e0f26afaf5a";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    // $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
      .then(function(response) {
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      // console.log("The humidity in " + city + " is " + response.main.humidity + "%");
    });

    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
    // console.log("Notice: The GET request has been made.");
  });
});

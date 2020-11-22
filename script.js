var apiKey = "&appid=6014881c91674ebb6f31796c5857bba1";

function grabCityChosen (cityFunction) {
    var apiKey = "&appid=6014881c91674ebb6f31796c5857bba1";
    var grabURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityFunction + apiKey

    $.ajax({
      url: grabURL,
      method: "GET"
    }).then(function(response) {
      //var results = response;
      console.log(response);
          // Transfer content to HTML
        var cityEL = $(".city").html("<h1>" + response.name);
        var iconEL = $(".icon").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png")
        var windEl = $(".wind").text("Wind Speed: " + response.wind.speed);
        var humidityEl = $(".humidity").text("Humidity: " + response.main.humidity + "%");
        
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        var tempEl = $(".tempF").text("Temperature (F) " + tempF.toFixed(2) + "°F");

            $("#dump-info").empty();
            $("dump-info").append(cityEL, iconEL, windEl, humidityEl, tempEl);



        // logged data in the console
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
        console.log("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png")
    
   var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=39.983334&lon=-82.983330" + apiKey


      $.ajax({
      url: uvURL,
      method: "GET"
    }).then(function(response) {
      //var results = response;
      console.log(response);
          // Transfer content to HTML
        $(".uv").text("UV Index: " + response.value);
    });

    });

}

$("#selectedCity").on("click", function(event) {
    event.preventDefault();
    var barSearch = $("#searchBar").val();

    grabCityChosen(barSearch);
  });

function idk() {

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');
let cityArray = localStorage.getItem('city')?JSON.parse(localStorage.getItem('city')):[];

localStorage.setItem('city', JSON.stringify(cityArray));
const data = JSON.parse(localStorage.getItem('city'));

const createList = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('input', function (event) {
  event.preventDefault();

  cityArray.push(input.value);
  localStorage.setItem('city', JSON.stringify(cityArray));
  createList(input.value);
  input.value = "";
});

data.forEach(searchBar => {
  createList(searchBar);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  cityArray = [];
});

}




var currentDay = moment().format('L');
function displayCurrentDay() {
    
    $(".date").html("<h4>" + currentDay);
};

displayCurrentDay();

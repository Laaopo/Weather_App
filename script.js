var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
apik = "8e89d40a8c76b2638f31b4a04e74e843";

function convertion(val) {
  //when we want convert farenhieght to celcious F-273 = C
  return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Teampture: <span>${convertion(tempature)} C </span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h <span>`;
    })

    .catch((err) => alert("You Entered Wrong City Name:"));
});

// Weather API -- rapidapis.com
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5efbc1a28msh4d95bcb0b996631p19626fjsn94b538459e00",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
// Calling getWeather function
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("New Delhi");

// Mail API - smtpjs.com - Called through Click Event Listener
function sendEmail() {
  let mail = document.getElementsByClassName("mail")[0].value;
  let msg = document.getElementsByClassName("message")[0].value;
  if (mail == "" || msg == "") {
    alert("Enter Feedback fields correctly");
  } else {
    let body = "Mail ID : " + mail + "<br>" + "Message : " + msg;
    Email.send({
      SecureToken: "13f42695-dad3-4757-a795-ef57d2c1392a",
      To: "javidpspk7@gmail.com",
      From: "javidpspk7@gmail.com",
      Subject: "This is the subject",
      Body: body,
    }).then((message) => alert(message));
  }
}

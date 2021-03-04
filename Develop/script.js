let input = document.querySelector(".input");
let button = document.querySelector("button");
let search = document.querySelector("#search");
let current = document.querySelector("#current");
let week = document.querySelector("#week");

button.addEventListener("click", function() {
    current.children[0].innerHTML = input.value;
    let history = document.createElement("button");
    history.innerHTML = input.value;
    search.appendChild(history);

    history.addEventListener("click", function() {
        console.log(this.innerHTML);
    })
    history.addEventListener("click", getCurrent);
    history.addEventListener("click", getFiveDay);
});

button.addEventListener("click", getCurrent);
function getCurrent() {
    let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=de53a40654766cb8ce20288a99c9f736";
    console.log(requestUrl);

    fetch(requestUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        let tempF = Math.floor((data["main"]["temp"] - 273.15) * 9/5 + 32);

        current.children[0].innerHTML = data["name"] + moment().format(" (M/D/YYYY) ") + data["weather"][0]["description"];
        current.children[1].innerHTML = "Temperature: " + tempF + " F";
        current.children[2].innerHTML = "Humidity: " + data["main"]["humidity"] + "%";
        current.children[3].innerHTML = "Wind Speed: " + data["wind"].speed + " mph";
        current.children[4].innerHTML = "UV Index: " + data["name"];

      })
      .catch(function() {
        console.log("Error");
      });
}

button.addEventListener("click", getFiveDay);
function getFiveDay() {
    let requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&cnt=5&appid=de53a40654766cb8ce20288a99c9f736";
    console.log(requestUrl);

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        

        for (i = 0; i < 5; i++) {
            let tempF = Math.floor((data["list"][i]["main"]["temp"] - 273.15) * 9/5 + 32);
            let day = week.children[i];
            day.innerHTML = "";

            let date = document.createElement("p");
            date.innerHTML = moment().format("M/D/YYYY");
            day.appendChild(date);

            let emoji = document.createElement("p");
            emoji.innerHTML = data["list"][i]["weather"][0]["description"];
            day.appendChild(emoji);

            let temp = document.createElement("p");
            temp.innerHTML = "Temp: " + tempF + " F";
            day.appendChild(temp);

            let humid = document.createElement("p");
            humid.innerHTML = "Humidity: " + data["list"][i]["main"]["humidity"] + "%";
            day.appendChild(humid);
        }
        
        
    })
}

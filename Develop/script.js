let body = document.querySelector("body");
let input = document.querySelector("input");
let button = document.querySelector("button");
let search = document.querySelector("#search");

let script = document.createElement("script");

button.addEventListener("click", function() {
    script.setAttribute("src", "http://api.openweathermap.org/data/2.5/weather?q={" + input.value + "}&appid={de53a40654766cb8ce20288a99c9f736}");
    // script.setAttribute("src", "http://api.openweathermap.org/data/2.5/weather?q={" + input.value + "}&appid={1e3c0d8f0165df5cb4048999328d8b79}");
    let history = document.createElement("button");
    history.innerHTML = input.value;
    search.appendChild(history);

    history.addEventListener("click", function() {
        console.log(this.innerHTML);
    })
});

body.appendChild(script);
// console.log(temperature.value);
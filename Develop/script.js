let input = document.querySelector(".input");
let button = document.querySelector("button");
let search = document.querySelector("#search");
let current = document.querySelector("#current");

button.addEventListener("click", function() {
    current.children[0].innerHTML = input.value;
    let history = document.createElement("button");
    history.innerHTML = input.value;
    search.appendChild(history);

    history.addEventListener("click", function() {
        console.log(this.innerHTML);
    })
});

button.addEventListener("click", getApi);
function getApi() {
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=de53a40654766cb8ce20288a99c9f736";
    console.log(requestUrl);

    fetch(requestUrl)
      .then(function(response) {
        return response.json();
      })
      .then(data => console.log(data))
      .catch(function() {
          console.log("Error");
      });
}

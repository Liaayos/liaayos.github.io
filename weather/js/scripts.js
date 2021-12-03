function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

// Add active class to the current button (highlight it)
var header = document.getElementById("primaryNav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
  const s = document.querySelector('#selected')
  const sel = document.querySelector('#selectbrowser');
  s.style.display = "block";
  s.textContent = sel.value;

}


/*--------------WEATHER SUMMARY---------*/



const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=08af901bcdaa17bfeda72600c3b6a3a5';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.list[0].main.temp;
    document.getElementById('high').textContent = jsObject.list[0].main.temp_max;
    document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed;
    document.getElementById('current-condition').textContent = jsObject.list[0].weather[0].description;
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

    let fiveDay = []

    jsObject.list.forEach(function (item) {

      let timeDate = item.dt_txt;

      if (timeDate.includes('18:00:00')) {
        fiveDay.push(item)
      }
    })

    var count = 0;

    fiveDay.forEach(function (item) {
      let timeDate = item.dt_txt;

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const daynumber = new Date(timeDate).getDay();
      const dayname = days[daynumber]

      count++;
      document.querySelector('#day' + count).textContent = item.main.temp;

      const imagesrc = 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '.png';
      const desc = item.weather[0].description; // note how we reference the weather array
      document.getElementById(count + '-day').textContent = imagesrc; // informational specification only
      document.getElementById(count + '-day').setAttribute('src', imagesrc); // focus on the setAttribute() method
      document.getElementById(count + '-day').setAttribute('alt', desc);

      document.getElementById('name' + count).textContent = dayname;

    })


  });
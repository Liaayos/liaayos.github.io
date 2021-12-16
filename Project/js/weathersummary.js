const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=08af901bcdaa17bfeda72600c3b6a3a5&units=imperial';

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
      console.log(item.main.temp)

      count++;
      document.querySelector('#day' + count).textContent = item.main.temp;

      const imagesrc = 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '.png';
      const desc = item.weather[0].description; 
      document.getElementById(count + '-day').textContent = imagesrc; 
      document.getElementById(count + '-day').setAttribute('src', imagesrc); 
      document.getElementById(count + '-day').setAttribute('alt', desc);

      document.getElementById('name' + count).textContent = dayname;

    })


  });
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=08af901bcdaa17bfeda72600c3b6a3a5';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
        
    });
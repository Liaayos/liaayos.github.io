
const temperature = document.getElementById("temperature").innerHTML 
const windspeed = document.getElementById("windspeed").innerHTML

if (temperature > 50 || windspeed < 3) {
    var windchill = "N/A"
}
else {
    var windchill = (35.74) + (0.6215 * temperature) - (35.75 * (windspeed ** 0.16)) + (0.4275 * temperature * (windspeed ** 0.16))
}

document.getElementById("windchill").innerHTML = windchill.toFixed(2);
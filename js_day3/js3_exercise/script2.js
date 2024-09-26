let temperature = Math.random() * 40 - 5;

temperature = Math.round(temperature * 10) / 10;

let weatherDescription;
let weatherImage;

if (temperature <= 10) {
    weatherDescription = "The weather is cold.";
    weatherImage = "https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_640.jpg";
} else if (temperature <= 20) {
    weatherDescription = "The weather is moderate.";
    weatherImage = "https://cdn.pixabay.com/photo/2023/10/28/09/20/darling-8346954_640.jpg";
} else if (temperature <= 28) {
    weatherDescription = "The weather is warm.";
    weatherImage = "https://cdn.pixabay.com/photo/2020/04/13/11/49/forest-5038025_1280.jpg";
} else if (temperature <= 32) {
    weatherDescription = "The weather is hot.";
    weatherImage = "https://cdn.pixabay.com/photo/2024/02/05/03/10/sun-8553511_640.jpg";
} else {
    weatherDescription = "The weather is extremely hot.";
    weatherImage = "https://media.istockphoto.com/id/2148221665/de/foto/sommer-sonne-und-ein-thermometer.jpg?s=612x612&w=is&k=20&c=xLn4RW-S8h7-N2ck8bH5rGYZ_-U1NWOOgsK5xf-NZCg=";
}

document.getElementById("temperature").innerText = `${temperature}°C`;
document.getElementById("weather-description").innerText = weatherDescription;
document.getElementById("weather-image").src = weatherImage;
let API_KEY;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // url을 fetch하고 해당 url로부터의 response를 기다림
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityContainer = document.querySelector(
                "span.city"
            );
            const weatherContainer = document.querySelector(
                "span.temp"
            );
            console.log(data);
            if(data.cod === 401){
                cityContainer.innerText = "You're so awesome!";
                weatherContainer.innerText = "Happy Day!";
            } else{
                cityContainer.innerText = data.name;
                weatherContainer.innerText = `${data.main.temp.toFixed(0)}°C`;
                document.querySelector(
                    "#icon"
                ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            }
        });
}

function onGeoErr() {
    console.log("can't find you. no weather for you");
}
// navigator.geolocation.getCurrentPosition(success function, error function)
// live server를 개인 ip로 사용 중이라면 Geolocation API 개인정보보안 때문에 작동하지 않으니 localhost:port/index.html 로 이용하도록 하자.
fetch("./config.json")
    .then((response) => response.json())
    .then((config) => {
        API_KEY = config.API_KEY;
    })
    .then(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr));

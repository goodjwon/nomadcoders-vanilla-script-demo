const COORDS = 'coords'
const API_KEY = '59a10d9cf94201aac9d0c8e93f2ea70c';
const weather = document.querySelector('.js-weather');

function getWether(lat, lng) {
    console.log(lat, lng);
    fetch(
        `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=1&appid=${API_KEY}&units=metric`
    ).then((response)=>{
        return response.json();
    }).then((json)=>{
        const tempcher = json.list[0].main.temp;
        const place = json.list[0].name;
        console.log(`${tempcher} @ ${place}`);
        weather.innerText = `${tempcher} @ ${place}`;
    })
}


function handleGeoError() {
    console.log('Can not access geo location!!!')
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSuccess(position) {
    console.log(position)
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }

    saveCoords(coordsObj);
    getWether(latitude, longitude);

}

function askCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);

    if(loadCoords === null) {
        askCoords();
    } else {
        const parseCode = JSON.parse(loadCoords);
        getWether(parseCode.latitude, parseCode.longitude)
    }

}

function init() {
    loadCoords();
}

init();
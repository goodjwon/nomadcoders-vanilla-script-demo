const clockContainer =  document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

console.log(clockContainer);
console.log(clockTitle);


function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${pad(hour)}:${pad(minute)}:${pad(second)}`;
}

function pad(val) {
    const result = val < 10 ? '0'+val : val;
    return result;
}


function init() {
    setInterval(getTime, 1000)
}

init();
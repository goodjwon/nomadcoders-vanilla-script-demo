const clockContainer =  document.querySelector(".js-clock");
const clocktitle = clockContainer.querySelector("h1");

console.log(clockContainer);
console.log(clocktitle);


function getTime() {
    const date = new Date();
    date.getHours();
    date.getMinutes();
}

function init() {

}

init();
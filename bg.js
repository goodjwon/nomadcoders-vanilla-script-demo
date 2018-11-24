

const body = document.querySelector('body');
const IMAGE_NUM = 3;

console.dir(body)
;

function printImage(imageNumber) {
    const image = new Image();
    image.src = `./images/${imageNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);

}

function getRendom() {
    const number = Math.floor(Math.random() * IMAGE_NUM);
    return number;
}

function init() {
    printImage(getRendom());
}

init();
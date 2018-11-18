

const title = document.getElementById('title'); //get DOM getElementById



console.log(title);
console.dir(title);


title.innerHTML = "Hi from JS";
title.style.color = "red";

console.dir(title);

document.title = "I love u";


const title2 = document.querySelector('#title');    //get DOM get querySelector
title2.innerHTML = "Hi from JS selector";
title.style.color = "white";

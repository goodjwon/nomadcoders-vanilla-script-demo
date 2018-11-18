

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



function handleResize(event){
    console.log(event)
}

window.addEventListener("resize", handleResize);


function handleClick(){
    title.style.color ="green";
}

title.addEventListener("click", handleClick);

/**
 Event List
     click – 마우스버튼을 클릭하고 버튼에서 손가락을 떼면 발생한다.
     mouseover – 마우스를 HTML요소 위에 올리면 발생한다.
     mouseout – 마우스가 HTML요소 밖으로 벗어날 때 발생한다.
     mousedown – 클릭을 하기 위해 마우스버튼을 누르고 아직 떼기 전인 그 순간, HTML요소를 드래그할 때 사용할 수 있다.
     mouseup – 마우스버튼을 떼는 그 순간, 드래그한 HTML요소를 어딘가에 놓을 때 사용할 수 있다.
     mousemove – 마우스가 움직일때마다 발생한다. 마우스커서의 현재 위치를 계속 기록하는 것에 사용할 수 있다.
     focus – HTML요소에 포커스가 갔을때 발생한다.
     blur – HTML요소가 포커스에서 벗어났을때 발생한다.
     keypress – 키를 누르는 순간에 발생하고 키를 누르고 있는 동안 계속해서 발생한다.
     keydown – 키를 누를 때 발생한다.
     keyup – 키를 눌렀다가 떼는 순간에 발생한다.
     load – 웹페이지에서 사용할 모든 파일의 다운로드가 완료되었을때 발생한다.
     resize – 브라우저 창의 크기를 조절할때 발생한다.
     scroll – 스크롤바를 드래그하거나 키보드(up, down)를 사용하거나 마우스 휠을 사용해서 웹페이지를 스크롤할 때 발생한다. 페이지에 스크롤바가 없다면 이벤트는 발생하지 않다.
     unload – 링크를 클릭해서 다른 페이지로 이동하거나 브라우저 탭을 닫을 때 혹은 브라우저 창을 닫을 때 이벤트가 발생한다.
     change – 폼 필드의 상태가 변경되었을 때 발생한다. 라디오 버튼을 클릭하거나 셀렉트 박스에서 값을 선택하는 경우를 예로 들수 있다.
 */



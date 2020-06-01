function onColorChange(){
    divEl.style.backgroundColor = inputColor.value;
}
function onSelectForm(){
    switch(selectForm.value){
        case 'Квадрат' :   
            addClassSquare();
            break;
        case 'Прямоугольник' : 
            addClassRectangle();
            break;
        case 'Круг' : 
            addClassCircle();
            break;
    }
}
function addClassSquare(){
    divEl.classList.remove('rectangle');
    divEl.classList.remove('circle');
    divEl.classList.add('square');
}
function addClassRectangle(){
    divEl.classList.remove('square');
    divEl.classList.remove('circle');
    divEl.classList.add('rectangle');
}
function addClassCircle(){
    divEl.classList.remove('square');
    divEl.classList.remove('rectangle');
    divEl.classList.add('circle');
}
function onMoveDivEl(e){
    switch(e.keyCode){
        case 38 : divEl.style.top = countPxTop - 10 + 'px'; countPxTop -= 10; break;
        case 37 : divEl.style.left = countPxLeft - 10 + 'px'; countPxLeft -= 10; break;
        case 40 : divEl.style.top = countPxTop + 10 + 'px'; countPxTop += 10; break;
        case 39 : divEl.style.left = countPxLeft + 10 + 'px'; countPxLeft += 10; break;
    }
}


let countPxTop = 100;
let countPxLeft = 100;
let divEl = document.querySelector('#div-el');
let selectForm = document.querySelector('#select-form');
let inputColor = document.querySelector('#input-color');
inputColor.addEventListener('change', onColorChange);
selectForm.addEventListener('click', onSelectForm);
document.addEventListener('keydown', onMoveDivEl);
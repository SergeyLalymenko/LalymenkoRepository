//function onBtnClick(){
//    let text = textInput.value.trim();
//    if(text !== ''){
//        listUl.innerHTML += formTemplate
//        .replace('{{textLi}}', text)
//        .replace('{{textBtn}}', 'delete');
//        textInput.value = '';
//    }
//}
function onBtnClick(){
    validValue();
}
function validValue(){
    textInput.value = textInput.value.trim();
    if(textInput.value !== ''){
        addLi();
    }
}
function addLi(){
    listUl.innerHTML += formTemplate
    .replace('{{textLi}}', textInput.value)
    .replace('{{textBtn}}', 'delete');
    textInput.value = '';
}
function onLiElClick(e){
    switch(e.target.tagName){
        case 'LI' : 
            toggleGreenColor();
            break;
        case 'BUTTON' :    
            removeFatherEl();
            break;
    }
    function toggleGreenColor(){
        e.target.classList.toggle('green-color');
    }
    function removeFatherEl(){
        e.target.parentNode.remove();
    }
}



let textInput = document.getElementById('main-input');
let addBtn = document.getElementById('main-btn');
let listUl = document.getElementById('main-ul');
let formTemplate = document.getElementById('form-template').innerHTML;
addBtn.addEventListener('click', onBtnClick);
listUl.addEventListener('click', onLiElClick);
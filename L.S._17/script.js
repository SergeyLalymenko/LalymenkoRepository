let URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';


function init(){
    sendGetRequest();
}

function sendGetRequest(){
    fetch(URL)
        .then((res) => res.json())
        .then((data) => renderData(data))
        // .then(() => {
        //     textareas = document.querySelectorAll('.textarea');
        // });
}

function renderData(data){
    data.forEach((element) => {
        let readyTemplate = getReadyTemplate(element);
        generateHtml(readyTemplate);
    })
}

function getReadyTemplate(element){
    return readyTemplate = formTemplate
        .replace('{{description}}', element.description)
        .replace('{{id}}', element.id)
        .replace('{{class}}', 'textarea');
}

function onBtnClick(){
    let sticker = {
        description: '',
    }
    fetch(URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    })
    .then((res) => res.json())
    .then((data) => renderSticker(data));
}

function renderSticker(element){
    let readyTemplate = getReadyTemplate(element);
    generateHtml(readyTemplate);
}

function generateHtml(template){
    container.innerHTML += template;
}

function onContainerClick(e){
    if(e.target.tagName == 'BUTTON'){
        deleteSticker(e);
    }
}

function deleteSticker(e){
    e.target.parentElement.remove();
    fetch(URL + '/' + e.target.parentElement.id,{
        method: 'DELETE',
    })
}

function onTextareasFocusout(e){
    if(e.target.tagName == 'TEXTAREA'){
        sendPutRequest(e);
    }
}

function sendPutRequest(e){
    let sticker = {
        description: e.target.value,
    }
    fetch(URL + '/' + e.target.parentElement.id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    })
}




let addBtn = document.getElementById('addBtn');
let container = document.getElementById('container');
let formTemplate = document.getElementById('form-template').innerHTML;
let textareas = document.querySelector('.div-container');


textareas.addEventListener('focusout', onTextareasFocusout);
addBtn.addEventListener('click', onBtnClick);
container.addEventListener('click', onContainerClick);


init();
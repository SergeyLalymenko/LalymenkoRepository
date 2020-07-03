let URL = 'https://jsonplaceholder.typicode.com/todos';
let TAG_NAME_LI = 'LI';
let TAG_NAME_BUTTON = 'BUTTON';
let CLASS_YELLOW_COLOR = 'yellow-color';
let CLASS_GREEN_COLOR = 'green-color';
let CLASS_YELLOW_GREEN_COLOR = 'yellow-color green-color';
let BUTTON_TEXT_DELETE = 'delete';

function onBtnClick(){
    checkValidValue();
}
function checkValidValue(){
    if(input.value !== ''){
        input.value = input.value.trim();
        sendPostRequest();
    }
}
function sendPostRequest(){
    let todo = {
        title: input.value,
        completed: false,
    }
    clearInput();
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    .then((res) => res.json())
    .then((data) => generateHTML(data));
}
function clearInput(){
    input.value = '';
}
function generateHTML(data){
    listUl.innerHTML += formTemplate
    .replace('{{textLi}}', data.title)
    .replace('{{textBtn}}', BUTTON_TEXT_DELETE)
    .replace('{{class}}', CLASS_YELLOW_COLOR)
    .replace('{{id}}', data.id);
}
function onLiElClick(e){
    switch(e.target.tagName){
        case TAG_NAME_LI : 
            toggleGreenColor(e);
            updateTodoData(e);
            break;
        case TAG_NAME_BUTTON :  
            removeServerEl(e);
            removeFatherEl(e);
            break;
    }
}
function toggleGreenColor(e){
    e.target.classList.toggle(CLASS_GREEN_COLOR);
}
function updateTodoData(e){
    let updatedTodo = {
        id: e.target.id,
        completed: true,
        title: e.target.innerText,
    }
    if(e.target.classList.contains(CLASS_GREEN_COLOR)){
        changeCompletedTrue(updatedTodo);
    } else{
        changeCompletedFalse(updatedTodo);
    }
    fetch(URL + '/' + e.target.id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function changeCompletedTrue(updatedTodo){
    updatedTodo.completed = true;
}
function changeCompletedFalse(updatedTodo){
    updatedTodo.completed = false;
}
function removeFatherEl(e){
    e.target.parentNode.remove();
}
function removeServerEl(e){
    fetch(URL + '/' + e.target.parentElement.id,{
        method: 'DELETE',
    })
}
function addServerTodos(data){
    data.forEach((element => {
        let readyTemplate;
        if(element.completed == true){
            generateGreenTodoHTML(readyTemplate, element);
        } else{
            generateYellowTodoHTML(readyTemplate, element);
        }
    }))
}
function generateGreenTodoHTML(readyTemplate, el){
    readyTemplate = formTemplate
    .replace('{{class}}', CLASS_YELLOW_GREEN_COLOR)
    .replace('{{textLi}}', el.title)
    .replace('{{textBtn}}', BUTTON_TEXT_DELETE)
    .replace('{{id}}', el.id);
    addReadyTemplate(readyTemplate);
}
function generateYellowTodoHTML(readyTemplate, el){
    readyTemplate = formTemplate
    .replace('{{class}}', CLASS_YELLOW_COLOR)
    .replace('{{textLi}}', el.title)
    .replace('{{textBtn}}', BUTTON_TEXT_DELETE)
    .replace('{{id}}', el.id);
    addReadyTemplate(readyTemplate);
}
function addReadyTemplate(template){
    listUl.innerHTML += template;
}






let input = document.getElementById('main-input');
let addBtn = document.getElementById('main-btn');
let listUl = document.getElementById('main-ul');
let formTemplate = document.getElementById('form-template').innerHTML;

addBtn.addEventListener('click', onBtnClick);
listUl.addEventListener('click', onLiElClick);

fetch(URL)
.then((res) => res.json())
.then((data) => addServerTodos(data));
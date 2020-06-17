'use strict'

function createCompletedTemplate(dataArr){
    let completedTemplate;
    dataArr.forEach((element) => {
        completedTemplate = getClass(element,formTemplate)
        .replace('{{text}}', element.title);
        addCompletedTemplate(completedTemplate);
    })
}
function getClass(el, template){
    if(el.completed){
        return template.replace('{{class}}', 'green-color li');
    } else{
        return template.replace('{{class}}', 'red-color li');
    }
}
function addCompletedTemplate(template){
    ul.innerHTML += template;
}


let ul = document.getElementById('ul');
let formTemplate = document.getElementById('form-template').innerHTML;


fetch('https://jsonplaceholder.typicode.com/todos')
.then((res) => {
    return res.json();
})
.then((data) => {
    createCompletedTemplate(data);
})
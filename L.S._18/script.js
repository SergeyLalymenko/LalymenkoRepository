const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';
const CLASS_YELLOW_COLOR = 'yellow-color';
const CLASS_GREEN_COLOR = 'green-color';
const CLASS_YELLOW_GREEN_COLOR = 'yellow-color green-color';
const CLASS_DELETE_BUTTON = 'delete-button';



function init(){
    sendGetRequest();
}

function sendGetRequest(){
    fetch(URL)
        .then((res) => res.json())
        .then((data) => renderData(data))
}

function renderData(data){
    $(data).each(($index, $element) => {
        addTodo($element);
    })
}

function getReadyTemplate(element){
    let classFormTemplate = getClassFormTemplate(element);
    return classFormTemplate
        .replace('{{id}}', element.id)
        .replace('{{text}}', element.title);
}

function getClassFormTemplate(element){
    if(checkIsDone(element)){
        return $formTemplate
        .replace('{{class}}', CLASS_YELLOW_GREEN_COLOR);
    } else{
        return $formTemplate
        .replace('{{class}}', CLASS_YELLOW_COLOR);
    }
}

function checkIsDone(element){
    return $(element).attr('isDone') == true;
}

function onListClick(e){
    if($(e.target).hasClass(CLASS_YELLOW_COLOR)){
        toggleGreenColor($(e.target));
        sendGetRequestElement($(e.target));
    } else if($(e.target).hasClass(CLASS_DELETE_BUTTON)){
        deleteElement($(e.target).parent());
        sendDeleteRequestElement($(e.target).parent().data('id'));
    }
}

// function onToggleListClick(e){
//     toggleGreenColor($(e.target));
//     sendGetRequestElement($(e.target));
// }

// function onDeleteBtnClick(e){
//     deleteElement($(e.target).parent());
//     sendDeleteRequestElement($(e.target).parent().attr('id'));
// }

function toggleGreenColor($element){
    $element.toggleClass(CLASS_GREEN_COLOR);
}

function sendGetRequestElement($element){
    fetch(URL + '/' + $element.attr('data-id'))
        .then((res) => res.json())
        .then((data) => changeElement(data));
}

function deleteElement($element){
    $element.remove();
}

function sendDeleteRequestElement($elementId){
    fetch(URL + '/' + $elementId, {
        method: 'DELETE',
    });
}

function changeElement(element){
        let todo = {
            id: $(element).attr('id'),
            title: $(element).attr('title'),
            isDone: !$(element).attr('isDone'),
        }
        fetch(URL + '/' + $(element).attr('id'),{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
}

function onBtnClick(){
    let todo = {
        title: 'JS is my life',
        isDone: false,
    }
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    .then((res) => res.json())
    .then((data) => addTodo(data));
}

function addTodo(element){
    let readyTemplate = getReadyTemplate(element);
    $list.html($list.html() + readyTemplate);
}



const $list = $('#list');
const $formTemplate = $('#form-template').html();
const $addBtn = $('#main-button');



// $list.on('click', '.' + CLASS_YELLOW_COLOR, onToggleListClick);
// $list.on('click', '.' + CLASS_DELETE_BUTTON, onDeleteBtnClick);
$list.on('click', onListClick);
$addBtn.on('click', onBtnClick);
init();
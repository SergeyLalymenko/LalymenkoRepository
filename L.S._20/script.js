const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
const CLASS_TEXTAREA = 'textarea';
const CLASS_BUTTON = 'delete-button';
const CLASS_DRAG = 'drag';
const CLASS_RESIZABLE = 'ui-resizable-handle';



function init(){
    sendGetRequest();
}

function sendGetRequest(){
    stickersData = [];
    $container.html('');
    fetch(URL)
        .then((res) => res.json())
        .then((data) => renderData(data));
}

function renderData(data){
    data.forEach((element) => {
        renderSticker(element);
    })
}

function getReadyTemplate(element){
    return readyTemplate = $formTemplate
        .replace('{{description}}', $(element).attr('description'))
        .replace('{{id}}', $(element).attr('id'))
        .replace('{{class}}', CLASS_TEXTAREA);
}

function onBtnClick(){
    let sticker = {
        description: '',
        x: '250',
        y: '250',
        width: '300',
        height: '200',
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
    addStyles(element);
    pushElement(element);
}

function pushElement(element){
    stickersData.push(element);
}

function addStyles(element){
    $container.children().eq(-1)
        .css('height', element.height + 'px')
        .css('width', element.width + 'px')
        .css('left', element.x + 'px')
        .css('top', element.y + 'px');
}

function generateHtml(template){
    $container.append(template);
    $('.main-div').draggable().resizable();
}

function onDeleteBtnClick(e){
    deleteSticker($(e.target).parent().attr('id'));
}

function deleteSticker(id){
    fetch(URL + '/' + id,{
        method: 'DELETE',
    })
    .then(() => $(`#${id}`).remove());
}

function onTextareasFocusout(e){
    sendPutRequest($(e.target));
}

function sendPutRequest($target){
    let sticker = {
        description: $target.val(),
        ...getStickerCss($target),
    }
    fetch(URL + '/' + $target.parent().attr('id'),{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    })
}

function getStickerCss($element){
    return object = {
        x: $element.parent().css('left').replace(/[^+\d]/g, ''),
        y: $element.parent().css('top').replace(/[^+\d]/g, ''),
        width: $element.parent().css('width').replace(/[^+\d]/g, ''),
        height: $element.parent().css('height').replace(/[^+\d]/g, ''),
    }
}

function onStickerMouseup(e){
    let element = stickersData.find((item) => item.id == $(e.target).parent().attr('id'));
    let sticker = {
        description: $(element).attr('description'),
        ...getStickerCss($(e.target)),
    }
    fetch(URL + '/' + $(e.target).parent().attr('id'),{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    })
}



let stickersData = [];
const $addBtn = $('#addBtn');
const $container = $('#container');
const $formTemplate = $('#form-template').html();



$addBtn.on('click', onBtnClick);
$container.on('focusout', '.' + CLASS_TEXTAREA, onTextareasFocusout);
$container.on('click', '.' + CLASS_BUTTON, onDeleteBtnClick);
$container.on('mouseup', '.' + CLASS_DRAG, onStickerMouseup);
$container.on('mouseup', '.' + CLASS_RESIZABLE, onStickerMouseup);



init();


import $ from 'jquery';
import './style.css';

const URL = 'wss://fep-app.herokuapp.com/'; 
const socket = new WebSocket(URL);

const $list = $('#list');
const template = document.getElementById('form-template').innerHTML;
const sendBtn = document.getElementById('button');
const inputName = document.getElementById('input-name');
const inputMessage = document.getElementById('input-message');



function getReadyTemplate(data){
    return template
        .replace('{{name}}', data.payload.username)
        .replace('{{message}}', data.payload.message);
}

function onBtnClick(){
    let message = {
        type: 'message',
        payload: {
            username: inputName.value,
            message: inputMessage.value,
        }
    }
    inputMessage.value = '';
    socket.send(JSON.stringify(message));
}

socket.onopen = () => {
    const message = {
        type: 'message',
        payload: {
            username: 'Sergey',
            message: 'Connected',
        }
    }
    socket.send(JSON.stringify(message));
}

socket.onmessage = (e) => {
    let readyTemplate = getReadyTemplate(JSON.parse(e.data));
    $list.append(readyTemplate);
    
}

socket.onclose = (e) => {
    console.log('close', e);
}



sendBtn.addEventListener('click', onBtnClick);
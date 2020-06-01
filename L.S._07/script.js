function onButtonClick(){    
    const li = document.createElement('li');
    if(input.value === ''){

    } else {
        li.textContent = input.value;
        ul.prepend(li);
        input.value = '';
    }
}


const input = document.querySelector('#main-input');
const ul = document.querySelector('#main-ul');
const button = document.querySelector('#main-button');
button.addEventListener('click',onButtonClick);

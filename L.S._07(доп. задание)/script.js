function onButtonClick(){
    if(isNaN(+inputOne.value) || isNaN(+inputTwo.value) || inputOne.value === '' || inputTwo.value === ''){
        li.textContent = 'Ошибка!';
    } else  {
        calculate();
    }
}
function calculate(){
    let result;
    switch(select.value){
    case '+' : result = +inputOne.value + +inputTwo.value; break;
    case '-' : result = +inputOne.value - +inputTwo.value; break;
    case '*' : result = +inputOne.value * +inputTwo.value; break;
    case '/' : result = +inputOne.value / +inputTwo.value; break;
    case 'min' : if(+inputOne.value < +inputTwo.value){
        result = +inputOne.value;
    } else if(+inputOne.value == +inputTwo.value){
        result = '=';
    } else {
        result = +inputTwo.value;
    }; break;
    case 'max' : if(+inputOne.value > +inputTwo.value){
        result = +inputOne.value;
    } else if(+inputOne.value == +inputTwo.value){
        result = '=';
    } else {
        result = +inputTwo.value;
    }; break;
}
li.textContent = result;
inputOne.value = '';
inputTwo.value = '';
}



let inputOne = document.querySelector('#input-one');
let inputTwo = document.querySelector('#input-two');
let button = document.querySelector('#button-calculate');
let select = document.querySelector('#select');
let li = document.querySelector('#li');
button.addEventListener('click', onButtonClick);








//function onButtonClick(){    
//    const li = document.createElement('li');
//    if(input.value !== ''){
//        li.textContent = input.value;
//        ul.prepend(li);
//        input.value = '';
//    }
//}


//const input = document.querySelector('#main-input');
//const ul = document.querySelector('#main-ul');
//const button = document.querySelector('#main-button');
//button.addEventListener('click',onButtonClick);

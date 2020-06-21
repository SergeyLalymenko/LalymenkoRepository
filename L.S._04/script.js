function checkOperation(){
    while(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){
        operation = prompt('Введите операцию +-*/');
    }
}
function getAmountOperands(){
    while(isNaN(amountOperands) || amountOperands < 2){
        amountOperands = +prompt('Введите количество операндов больше или равно двум');
    }
}
function getOperands(){
    for(let i = 0; i < amountOperands; i++){
        getOperand(i);
        arrOperands[i] = operand;
    }
}
function getOperand(index){
    do {
        operand = prompt(`Введите значение операнда ${index+1}`);
    } while (isNaN(+operand) || operand === '');
    operand = +operand;
}
function showSum(){
    console.log(arrOperands.reduce((acc, el) => acc + el));
}
function showSub(){
    console.log(arrOperands.reduce((acc, el) => acc - el));
}
function showMult(){
    console.log(arrOperands.reduce((acc, el) => acc * el));
}
function showDiv(){
    console.log(arrOperands.reduce((acc, el) => acc / el));
}



let arrOperands = [];
let operation = prompt('Введите операцию +-*/');
checkOperation();
let amountOperands = prompt('Введите количество операндов больше или равно двум');
getAmountOperands();
getOperands();


switch(operation){
    case '+': showSum(); break;
    case '-': showSub(); break;
    case '*': showMult(); break;
    case '/': showDiv(); break;
}
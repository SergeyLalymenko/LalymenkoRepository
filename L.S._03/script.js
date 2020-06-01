function calcSum(firstArgument, secondArgument){
    let resultSum = firstArgument + secondArgument;
    console.log(`Результат: ${firstArgument} + ${secondArgument} = ${resultSum}`);
}
function calcSubtraction(firstArgument, secondArgument){
    let resultSubtraction= firstArgument - secondArgument;
    console.log(`Результат: ${firstArgument} - ${secondArgument} = ${resultSubtraction}`);
}
function calcMultiplication(firstArgument, secondArgument){
    let resultMultiplication= firstArgument * secondArgument;
    console.log(`Результат: ${firstArgument} * ${secondArgument} = ${resultMultiplication}`);
}
function calcDivision(firstArgument, secondArgument){
    let resultDivision= firstArgument / secondArgument;
    console.log(`Результат: ${firstArgument} / ${secondArgument} = ${resultDivision}`);
}
let operation = prompt('Введите одну из операций: add, sub, mult, div');
let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');
switch(operation){
    case 'add' : calcSum(firstNumber, secondNumber); break;
    case 'sub' : calcSubtraction(firstNumber, secondNumber); break;
    case 'mult' : calcMultiplication(firstNumber, secondNumber); break;
    case 'div' : calcDivision(firstNumber, secondNumber); break;
    default: alert('Операция введена неверно!');
}


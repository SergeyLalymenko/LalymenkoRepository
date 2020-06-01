function calcSum(firstArgument, secondArgument){
    let resultSum = firstArgument + secondArgument;
    console.log(`Результат: ${firstArgument} + ${secondArgument} = ${resultSum}`);
}
function calcSubtraction(firstArgument, secondArgument){
    let resultSubtraction = firstArgument - secondArgument;
    console.log(`Результат: ${firstArgument} - ${secondArgument} = ${resultSubtraction}`);
}
function calcMultiplication(firstArgument, secondArgument){
    let resultMultiplication = firstArgument * secondArgument;
    console.log(`Результат: ${firstArgument} * ${secondArgument} = ${resultMultiplication}`);
}
function calcDivision(firstArgument, secondArgument){
    let resultDivision = firstArgument / secondArgument;
    console.log(`Результат: ${firstArgument} / ${secondArgument} = ${resultDivision}`);
}
function calcPow(firstArgument, secondArgument){
    let resultPow = Math.pow(firstArgument, secondArgument);
    console.log(`Результат: ${firstArgument}(${secondArgument}) = ${resultPow}`);
}
function calcCos(argument){
    let resultCos = Math.cos(argument);
    console.log(`Результат: cos(${argument}) = ${resultCos}`);
}
function calcSin(argument){
    let resultSin = Math.sin(argument);
    console.log(`Результат: sin(${argument}) = ${resultSin}`);
}
function calcTan(argument){
    let resultTan = Math.tan(argument);
    console.log(`Результат: tan(${argument}) = ${resultTan}`);
}
let operation = prompt('Введите одну из операций: add, sub, mult, div, pow, cos, sin, tan');
let firstNumber;
let secondNumber;
let number;
if(operation == 'add' || operation == 'sub' || operation == 'mult' || operation == 'div' || operation == 'pow'){
    firstNumber = +prompt('Введите первое число');
    secondNumber = +prompt('Введите второе число');
} else if(operation == 'cos' || operation == 'sin' || operation == 'tan'){
    number = +prompt('Введите число');
} else {
    alert('Операция введена неверно!');
}
switch(operation){
    case 'add' : calcSum(firstNumber, secondNumber); break;
    case 'sub' : calcSubtraction(firstNumber, secondNumber); break;
    case 'mult' : calcMultiplication(firstNumber, secondNumber); break;
    case 'div' : calcDivision(firstNumber, secondNumber); break;
    case 'pow' : calcPow(firstNumber, secondNumber); break;
    case 'cos' : calcCos(number); break;
    case 'sin' : calcSin(number); break;
    case 'tan' : calcTan(number); break;
}
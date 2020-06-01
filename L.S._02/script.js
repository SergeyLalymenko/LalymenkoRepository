function calcSum(firstArgument, secondArgument){
    let resultSum = +firstArgument + +secondArgument;
    console.log('Результат: ' + firstArgument + '+' + secondArgument + ' = ' + resultSum);
}
function calcSubtraction(firstArgument, secondArgument){
    let resultSubtraction= +firstArgument - +secondArgument;
    console.log('Результат: ' + firstArgument + '-' + secondArgument + ' = ' + resultSubtraction);
}
function calcMultiplication(firstArgument, secondArgument){
    let resultMultiplication= +firstArgument * +secondArgument;
    console.log('Результат: ' + firstArgument + '*' + secondArgument + ' = ' + resultMultiplication);
}
function calcDivision(firstArgument, secondArgument){
    let resultDivision= +firstArgument / +secondArgument;
    console.log('Результат: ' + firstArgument + '/' + secondArgument + ' = ' + resultDivision);
}
let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');
calcSum(firstNumber, secondNumber);
calcSubtraction(firstNumber, secondNumber);
calcMultiplication(firstNumber, secondNumber);
calcDivision(firstNumber, secondNumber);
//Не понял,нужно ли использовать аргументы,так что сделал с ними на всякий случай
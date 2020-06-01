function getOperation(userOperation){
    while(checkOperation(userOperation)){
        userOperation = prompt('Введите действие add, sub, mult или div');
    }
    return userOperation;
}
function checkOperation(userOperation){
    return userOperation !== 'add' && userOperation !== 'sub' && userOperation !== 'mult' && userOperation !== 'div';
}
function getNumbers(userNumbers){
    userNumbers = prompt('Введите числа через пробел!');
    while(checkNumbers(userNumbers)){
        userNumbers = prompt('Введите числа через пробел!');
    }
    return userNumbers;
}
function checkNumbers(userNumbers){
    return userNumbers == 0;
}
function filterNumbers(value){
    return !isNaN(value);
}
function calcSum(arr){
    let result = 0;
    let str = '';
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
        result += arr[i];
        if(i === 0){
            str += arr[i];
        } else {
            str += ' + ' + arr[i];
        }
    }
    console.log(`Результат: ${str} = ${result}`);
}
function calcSub(arr){
    let result = 0;
    let str = '';
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
        if(i === 0){
            result = arr[i];
            str += arr[i];
        } else {
            result -= arr[i];
            str += ' - ' + arr[i];
        }
    }
    console.log(`Результат: ${str} = ${result}`);
}
function calcMult(arr){
    let result = 1;
    let str = '';
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
        result *= arr[i];
        if(i === 0){
            str += arr[i];
        } else {
            str += ' * ' + arr[i];
        }
    }
    console.log(`Результат: ${str} = ${result}`);
}
function calcDiv(arr){
    let result = 0;
    let str = '';
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
        if(i === 0){
            result = arr[i];
            str += arr[i];
        } else {
            result /= arr[i];
            str += ' / ' + arr[i];
        }
    }
    console.log(`Результат: ${str} = ${result}`);
}


let operation = prompt('Введите действие add, sub, mult или div');
operation = getOperation(operation);
let strNumbers;
strNumbers = getNumbers(strNumbers);
let arrStrNumbers = strNumbers.split(' ');
let arrNumbers = arrStrNumbers.filter(filterNumbers);
switch(operation){
    case 'add' : calcSum(arrNumbers); break;
    case 'sub' : calcSub(arrNumbers); break;
    case 'mult' : calcMult(arrNumbers); break;
    case 'div' : calcDiv(arrNumbers); break;
}
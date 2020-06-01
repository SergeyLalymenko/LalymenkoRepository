function checkOperation(argument){
    while(argument !== 'add' && argument !== 'sub' && argument !== 'mult' && argument !== 'div'){
        argument = prompt('Введите одну из операций: add, sub, mult, div');
    }
    return argument;
}
function getAmountOperands(argument){
    do{
        argument = +prompt('Введите количество операндов больше или равно двум!');
    } while(argument < 2 || !Number(argument));
    return argument;
}
function getOperands(index, arr){
    for(index = 0; index < amountOperands; index++){
        arr[index] = prompt(`Введите значение ${index+1} операнда!`);   
            for(arr[index]; arr[index] === '' || (!Number(arr[index]) && arr[index] !== '0'); ){
                arr[index] = prompt(`Введите значение ${index+1} операнда!`);
            }
            if(arr[index] === '0'){
                arr[index] = 0;
            } else {
                arr[index] = +arr[index];
            }
    }
}
function calcSum(arr){
    result = 0;
    for(i = 0; i < amountOperands; i++){
        result = result + arr[i];
        if(i === 0){
            str = str + arr[i];
        } else {
            str = str + ' + ' + arr[i];
        }
    }
    console.log(`Результат : ${str} = ${result}`);
}
function calcSub(arr){
    result = 0;
    for(i = 0; i < amountOperands; i++){
        if(i === 0){
            result = arr[i];
        } else {
            result = result - arr[i];
        }
        if(i === 0){
            str = str + arr[i];
        } else {
            str = str + ' - ' + arr[i];
        }
    }
    console.log(`Результат : ${str} = ${result}`);
}
function calcMult(arr){
    result = 1;
    for(i = 0; i < amountOperands; i++){
        result = result * arr[i];
        if(i === 0){
            str = str + arr[i];
        } else {
            str = str + ' * ' + arr[i];
        }
    }
    console.log(`Результат : ${str} = ${result}`);
}
function calcDiv(arr){
    result = 0;
    for(i = 0; i < amountOperands; i++){
        if(i === 0){
            result = arr[i];
        } else{
            result = result / arr[i];
        }
        if(i === 0){
            str = str + arr[i];
        } else {
            str = str + ' / ' + arr[i];
        }
    }
    console.log(`Результат : ${str} = ${result}`);
}



let str = '';
let result;
let i;
let amountOperands;
let operands = [];
let operation;
operation = checkOperation(operation);
amountOperands = getAmountOperands(amountOperands);
getOperands(i, operands);
switch(operation){
    case 'add' : calcSum(operands); break;
    case 'sub' : calcSub(operands); break;
    case 'mult' : calcMult(operands); break;
    case 'div' : calcDiv(operands); break;
}

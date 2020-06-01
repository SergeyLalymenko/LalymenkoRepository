function checkOperation(argument){
    for(argument; argument !== 'add' && argument !== 'sub' && argument !== 'mult' && argument !== 'div'; ){
   argument = prompt('Введите одну из операций: add, sub, mult, div');
    }
}
function checkOperands(argument){
    for(argument = 0; argument < 2; ){
        argument = +prompt('Введите количество операндов больше или равно двум!');
        for(argument; !Number(argument); ){
            argument = +prompt('Введите количество операндов больше или равно двум!');
        }
    }
    return argument;
}
function getOperands(firstArgument, secondArgument, thirdArgument){
    for(firstArgument = 0; firstArgument < secondArgument; firstArgument++){
        thirdArgument[firstArgument] = prompt(`Введите значение ${firstArgument+1} операнда!`);   
            for(thirdArgument[firstArgument]; thirdArgument[firstArgument] === '' || (!Number(thirdArgument[firstArgument]) && thirdArgument[firstArgument] !== '0'); ){
                thirdArgument[firstArgument] = prompt(`Введите значение ${firstArgument+1} операнда!`);
            }
            if(thirdArgument[firstArgument] === '0'){
                thirdArgument[firstArgument] = 0;
            } else {
                thirdArgument[firstArgument] = +thirdArgument[firstArgument];
            }
    }
}
function calcSum(firstArgument, secondArgument, thirdArgument, fourthArgument, fifthArgument){
    thirdArgument = 0;
    for(firstArgument = 0; firstArgument < secondArgument; firstArgument++){
        thirdArgument = thirdArgument + fourthArgument[firstArgument];
        if(firstArgument === 0){
            fifthArgument = fifthArgument + fourthArgument[firstArgument];
        } else {
            fifthArgument = fifthArgument + ' + ' + fourthArgument[firstArgument];
        }
    }
    console.log(`Результат : ${fifthArgument} = ${thirdArgument}`);
}
function calcSub(firstArgument, secondArgument, thirdArgument, fourthArgument, fifthArgument){
    thirdArgument = 0;
    for(firstArgument = 0; firstArgument < secondArgument; firstArgument++){
        if(firstArgument === 0){
            thirdArgument = fourthArgument[firstArgument];
        } else {
            thirdArgument = thirdArgument - fourthArgument[firstArgument];
        }
        if(firstArgument === 0){
            fifthArgument = fifthArgument + fourthArgument[firstArgument];
        } else {
            fifthArgument = fifthArgument + ' - ' + fourthArgument[firstArgument];
        }
    }
    console.log(`Результат : ${fifthArgument} = ${thirdArgument}`);
}
function calcMult(firstArgument, secondArgument, thirdArgument, fourthArgument, fifthArgument){
    thirdArgument = 1;
    for(firstArgument = 0; firstArgument < secondArgument; firstArgument++){
        thirdArgument = thirdArgument * fourthArgument[firstArgument];
        if(firstArgument === 0){
            fifthArgument = fifthArgument + fourthArgument[firstArgument];
        } else {
            fifthArgument = fifthArgument + ' * ' + fourthArgument[firstArgument];
        }
    }
    console.log(`Результат : ${fifthArgument} = ${thirdArgument}`);
}
function calcDiv(firstArgument, secondArgument, thirdArgument, fourthArgument, fifthArgument){
    thirdArgument = 0;
    for(firstArgument = 0; firstArgument < secondArgument; firstArgument++){
        if(firstArgument === 0){
            thirdArgument = fourthArgument[firstArgument];
        } else{
            thirdArgument = thirdArgument / fourthArgument[firstArgument];
        }
        if(firstArgument === 0){
            fifthArgument = fifthArgument + fourthArgument[firstArgument];
        } else {
            fifthArgument = fifthArgument + ' / ' + fourthArgument[firstArgument];
        }
    }
    console.log(`Результат : ${fifthArgument} = ${thirdArgument}`);
}



let str = '';
let result;
let i;
let amountOperands;
let operands = [];
let operation = prompt('Введите одну из операций: add, sub, mult, div');
checkOperation(operation);
amountOperands = checkOperands(amountOperands);
getOperands(i, amountOperands, operands);
switch(operation){
    case 'add' : calcSum(i, amountOperands, result, operands, str); break;
    case 'sub' : calcSub(i, amountOperands, result, operands, str); break;
    case 'mult' : calcMult(i, amountOperands, result, operands, str); break;
    case 'div' : calcDiv(i, amountOperands, result, operands, str); break;
}

let operation = prompt('Выберите операцию : умножить , поделить , добавить , отнять');
while(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){ 
    operation = prompt('Введите значение еще раз');
}
let arr = [];


function generateArr(){
    for(i = 0; i < 100; i++){
        arr[i] = i + 1;
    }
}

function checkValues(){
    for(i = 0; i < 100; i++){
        if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
            arr[i] = 'fooBar';
        } else if(arr[i] % 3 == 0){
            arr[i] = 'foo';
        } else if(arr[i] % 5 == 0){
            arr[i] = 'bar';
        }
    }
}


generateArr();
checkValues();
console.log(arr);
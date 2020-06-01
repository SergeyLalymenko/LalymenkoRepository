function createCalculator(mainCount){
    let currentCount = mainCount;
    return {
        sum: function(count) {
            currentCount += count;
            return currentCount;
        },
        sub: function(count) {
            currentCount -= count;
            return currentCount;
        },
        mult: function(count) {
            currentCount *= count;
            return currentCount;
        },
        div: function(count) {
            currentCount /= count;
            return currentCount;
        },
        set: function(count) {
            currentCount = count;
            return currentCount;
        }

    };
}



const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.sub(10)); /// 5
console.log(calc.mult(4)); /// 20
console.log(calc.div(2)); /// 10
console.log(calc.set(-30)); /// -30
console.log(calc.sum(15)); /// -15
console.log(calc.sub(-20)); /// 5
console.log(calc.mult(3)); /// 15
console.log(calc.div(5)); /// 3
console.log(calc.set(220)); /// 220
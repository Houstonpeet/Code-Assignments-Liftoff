function CalculatedSum (number) {
    let Sum = 0;

    if (number < 1) {
        return Sum;
    }

    for (let i = 1; i <= number; i++) {
        Sum += i;
    }
    
    return Sum;
}

console.log(CalculatedSum(4))
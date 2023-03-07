function factorial(number) {
    if (number == 0) return 1;
    else if (number > 0) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
    return NaN;

}

document.write(factorial(4));
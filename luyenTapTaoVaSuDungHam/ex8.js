function isPovInt(number) {
    if (number == NaN) return false;
    let check = String(number);
    for (let i = 0; i < check.length; i++) {
        if (check[i] < '0' || check[i] > '9') return false;
    }
    return true;
}

let arr = [1, 2, 2];
document.write(isPovInt(arr));
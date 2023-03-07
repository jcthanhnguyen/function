function isNumber(str) {
    let check = String(str);

    for (let i = 0; i < check.length; i++) {
        if ((check[i]) < '0' || check[i] > '9') return false;

    }
    return true;
}

document.write(isNumber('ifasf998'));
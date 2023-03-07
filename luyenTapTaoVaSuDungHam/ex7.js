function minOf3(first, second, last) {
    let result = first < second ? first : second;
    result = result < last ? result : last;
    return result;

}

document.write(minOf3(5, -1, 0));
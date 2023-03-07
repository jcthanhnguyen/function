function reverseIntArr(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let replace = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = replace;
    }
    return arr;

}



let arr = [1, 2, 3];
document.write(reverseIntArr(arr));
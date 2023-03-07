function countAppear(arr, str) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (str == arr[i]) count++;
    }
    if (count == 0) return -1;
    else return count;
}



let arr = ['t', 't', 'o', 'tert'];
document.write(countAppear(arr, 't'));
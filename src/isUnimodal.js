function isUnimodal(arr) {
    if (arr.length < 3) return false;
    
    let i = 1;
    while (i < arr.length && arr[i] > arr[i - 1]) i++;
    if (i === 1 || i === arr.length) return false;
    
    while (i < arr.length && arr[i] < arr[i - 1]) i++;
    
    return i === arr.length;
}

module.exports = isUnimodal;

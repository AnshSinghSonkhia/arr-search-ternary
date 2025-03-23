function array(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid1 = left + Math.floor((right - left) / 3);
        let mid2 = right - Math.floor((right - left) / 3);

        if (arr[mid1] === target) return mid1;
        if (arr[mid2] === target) return mid2;

        if (target < arr[mid1]) right = mid1 - 1;
        else if (target > arr[mid2]) left = mid2 + 1;
        else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    return -1;
}

module.exports = array;

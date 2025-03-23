function max(func, left, right, precision = 1e-7) {
    while (right - left > precision) {
        let mid1 = left + (right - left) / 3;
        let mid2 = right - (right - left) / 3;
        if (func(mid1) > func(mid2)) right = mid2;
        else left = mid1;
    }
    return (left + right) / 2;
}

module.exports = max;

function discrete(arr, left, right) {
    // Use ternary search while the interval is large enough.
    while (right - left >= 3) {
      let mid1 = left + Math.floor((right - left) / 3);
      let mid2 = right - Math.floor((right - left) / 3);
      
      if (arr[mid1] < arr[mid2]) {
        // The peak must lie in [mid1, right]
        left = mid1;
      } else {
        // The peak must lie in [left, mid2]
        right = mid2;
      }
    }
    
    // When the interval is small, just scan through it.
    let maxIdx = left;
    for (let i = left; i <= right; i++) {
      if (arr[i] > arr[maxIdx]) {
        maxIdx = i;
      }
    }
    return maxIdx;
  }
  
  module.exports = discrete;
  
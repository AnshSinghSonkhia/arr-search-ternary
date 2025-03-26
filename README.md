# arr-search-ternary

Ternary search algorithms for both continuous and discrete data. It includes functions for finding the minimum and maximum of unimodal functions, searching in sorted and rotated arrays, and detecting peak elements in unimodal sequences. Ideal for optimization problems, competitive programming, and mathematical computations.

[![npm](https://img.shields.io/npm/v/arr-search-ternary.svg)](https://www.npmjs.com/package/arr-search-ternary)  [![License](https://img.shields.io/npm/l/arr-search-ternary.svg)](LICENSE)  


## Installation
Install the package via npm:

```sh
npm i arr-search-ternary
```

--- 

# Usage

```js
const ternarySearch = require('arr-search-ternary');
```

---

# API Reference

### Find target in a sorted array using ternary search.

```js
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(ternarySearch.array(sortedArray, 5)); // Output: 4 (index of 5)
```

### Find a peak in a continuous function.

```js
const peak = ternarySearch.continuous(x => -1 * (x - 3) ** 2 + 9, 0, 6, 1e-6);
console.log(peak); // Output: ~3 (approximate peak point)
```

### Find a peak element in a unimodal array.

```js
const unimodalArray = [1, 3, 7, 12, 14, 13, 8, 4];
console.log(ternarySearch.discrete(unimodalArray, 0, unimodalArray.length - 1)); // Output: 4 (index of peak)
```

### Find any peak element in an array (local maximum).

```js
const nums = [1, 2, 3, 1];
console.log(ternarySearch.findPeakElement(nums)); // Output: 2 (index of peak)
```

### Check if an array is unimodal (strictly increasing then decreasing).

```js
console.log(ternarySearch.isUnimodal([1, 3, 7, 12, 14, 13, 8, 4])); // Output: true
console.log(ternarySearch.isUnimodal([1, 2, 3, 4, 5])); // Output: false
```

### Find the maximum of a unimodal function.

```js
const maximum = ternarySearch.max(x => -1 * (x - 5) ** 2 + 25, 0, 10, 1e-6);
console.log(maximum); // Output: ~5 (max point)
```

### Find the minimum of a unimodal function.

```js
const minimum = ternarySearch.min(x => (x - 5) ** 2, 0, 10, 1e-6);
console.log(minimum); // Output: ~5 (min point)
```

### Find target in a rotated sorted array.

```js
const rotatedSortedArray = [6, 7, 8, 9, 1, 2, 3, 4, 5];
console.log(ternarySearch.rotatedArray(rotatedSortedArray, 3)); // Output: 6 (index of 3)
```

### Find the min/max in a 2D grid.

```js
const gridFunc = (x, y) => (x - 3) ** 2 + (y - 2) ** 2;
const result = ternarySearch.search2d(gridFunc, 0, 6, 0, 6);
console.log(result); // Output: [3, 2] (approximate min point in the grid)
```

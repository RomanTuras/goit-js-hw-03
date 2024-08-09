'use strict';

/**
 * Filtering array
 * 
 * @param {Array} numbers 
 * @param {Number} value 
 * 
 * @return {Array}
 */
function filterArray(numbers, value){
    let resArray = [];
    for(const number of numbers){
        if (number>value) resArray.push(number);
    }

    return resArray;
}

// -----------< Tests >-----------
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

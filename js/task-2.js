'use strict';

/**
 * Making array
 * 
 * @param {Arrau} firstArray
 * @param {Array} secondArray
 * @param {Array} maxLength
 * 
 * @return {Array}
 */
function makeArray(firstArray, secondArray, maxLength){
    let resArray = firstArray.concat(secondArray);

    if (resArray.length<=maxLength) {
        return resArray;
    } else {
        return resArray.slice(0, maxLength);
    }
}

// -----------< Tests >-----------
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

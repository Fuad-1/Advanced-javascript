const numbers = [3, 4, 5, 6, 7, 8];
//1 general Way
// const output = [] ;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

/**
 *map - kon ekta array er moddhe looping kre protekta element niye ekta new array dibe
//2 map(passed function) - 3 parameter pass
//// function square(element){
////     return element * element ;
//// }
//numbers.map(square)
//or 
// numbers.map(function(element, index, array){
//     //return element * element ;
//     console.log(element, index, array);
// })
const result = numbers.map(function(element){
    return element * element ;
    //console.log(element, index, array);
})
console.log(result);
 */

/** 
//3 or 
//function square(element){
//     return element * element ;
// }
const square = element => element * element ;
const square = x => x * x ;
 

//4 more efficient
const result = numbers.map(x => x * x);
console.log(result);
*/

//filter - selective kisu || jei element gulo condition fill-up krbe || array return 
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

//find - array element through full-fill the condition and first value check and return the value
// find return the element
const isThere = numbers.find(x => x > 5);
console.log(isThere);

//for-each and reduce *** search and know about it
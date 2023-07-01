/* 
// New Feature 01 : array.toReversed()
const arr = [12, 23, 34, 345, 23];

// Muted reverse array
// const reversedArray = arr.reverse();

// Unmuted (es-14)
const reversedArray = arr.toReversed();

console.log(reversedArray);
console.log(arr); //main array is not muted because of using to.Reversed method
 */

/* -----------------*----------------------------- */
/* 
// New Feature 02 : array.toSpliced()
// original array
const arr = [1, 2, 3, 4, 5, 6];

// splice method use to remove or add new element to the array
// const removedEl = arr.splice(2, 2, 32, 33);
// console.log(removedEl);
// console.log(arr);  //array are muted using splice method 

// new feature
const newArray = arr.toSpliced(2, 1, 33, 34); //not mute array
console.log(newArray);
console.log(arr);
 */

/* ---------------*---------------------- */

/* 
// New Feature 03 : array.with()

// array.with() method work not mutedly and use this to add any element to the array

const arr = [1, 2, 3, 4, 5, 6];
const result = arr.with(2, 333);

console.log(result);
console.log(arr); //not muted of using with() method ;
 */

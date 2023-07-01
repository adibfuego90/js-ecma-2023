/* //original array 1 : method 
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
// 02 feature
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

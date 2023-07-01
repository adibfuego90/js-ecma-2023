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

/* ----------------- * ----------------------------- */
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

/* ------------------ * ---------------------- */

/* 
// New Feature 03 : array.with()

// array.with() method work not mutedly and use this to add any element to the array

const arr = [1, 2, 3, 4, 5, 6];
const result = arr.with(2, 333);

console.log(result);
console.log(arr); //not muted of using with() method ;
 */

/* ------------------ * ---------------------- */

// new feature -04 : array.toSort()

// const arr = [1, 23, 34, 1, 2, 4, 5, 1, 1];

/* // array.sort() method sort using string not number
const compare = function (a, b) {
  return a - b;
};
const sortedArray = arr.sort(compare);
console.log(sortedArray);
console.log(arr); //muted of using sort() method
 */

const cars = [
  {
    type: "volvo",
    year: 2016,
  },
  {
    type: "MS",
    year: 2012,
  },
  {
    type: "BS",
    year: 2010,
  },
];

const result = cars.sort(function (a, b) {
  // return a.year - b.year;  //for sort with number
  // to sort with string

  const x = a.type.toLowerCase();
  const y = b.type.toLowerCase();

  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
});
console.log(result);

// if we want to not muted our main array we have to use toSorted() method

const arrMain = [12, 23, 34, 1, 2, 4, 5, 2];
const resultMain = arrMain.toSorted();
console.log(resultMain);
console.log(arrMain);

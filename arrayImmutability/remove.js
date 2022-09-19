
/////////////////REMOVE (SLICE | FILTER)

const grades2 = [10, 8, 9, 4, 16];

// remove the first grade
// think of it as: get all grades except the first one
const subset1 = grades2.slice(1); //start from position 1
console.log(subset1); // [8, 9, 4, 16]

// remove the last 2 grades
// think of it as: get all grades except the last 2
// so start from 0 and stop after 5 - 2 = 3 items
const subset2 = grades2.slice(0, grades2.length - 2); 
console.log(subset2); // [10, 8, 9]




const grades3 = [10, 8, 9, 4, 16];

// return all grades >= 10
const subset3 = grades3.filter(grade3 => grade3 >= 10);
console.log(subset3); // [10, 16]

// remove the 2nd grade
const subset4 = grades3.filter(grade3 => grade3 !== 8);
console.log(subset4); // [10, 9, 4, 16]


const grades4 = [10, 8, 9, 4, 16];

const subset5 = grades4.filter((grade4, index) => index !== 1);
console.log(subset5); [10, 9, 4, 16];
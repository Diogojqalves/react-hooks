///////////MAP

const grades = [10, 20, 18, 14];
// change 18 to 17
const updatedGrades = grades.map(grade => {
    if (grade === 18){
        return 17;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.log(updatedGrades); //[10, 20, 17, 14]



const grades1 = [10, 8, 9, 4, 16];
// add 1 to all grades below 10
const updatedGrades1 = grades1.map(grade1 => {
    if (grade1 < 10){
        return grade1 + 1;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.log(updatedGrades1); //[10, 9, 10, 5, 16]



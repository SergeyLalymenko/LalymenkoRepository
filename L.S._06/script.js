function showMarkName(arr){ 
    let personSumMarks;
    let personMiddleMark;
    let personName;
    arr.forEach((element) => {
        personSumMarks = element.marks.reduce((acc, element) => acc + element);
        personMiddleMark = personSumMarks / element.marks.length;
        personName = element.name;
        console.log(`${personName} : ${personMiddleMark}`)
    });
}
function showMiddleMark(arr){
    let sumMarks = 0;
    let sumLength = 0;
    let middleMark;
    arr.forEach((element) => {
        sumMarks += element.marks.reduce((acc, element) => acc + element);
        sumLength += element.marks.length;
        middleMark = sumMarks / sumLength;
    })
    console.log(`Средний балл : ${middleMark}`);
}



const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7],
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7],
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8],
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9],
    }
];
showMarkName(students);
showMiddleMark(students);
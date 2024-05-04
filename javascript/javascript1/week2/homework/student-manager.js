const class07Students = [];

function addStudentToClass(studentName) {
    
    studentName = studentName.trim();

    if(class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if(studentName === "Queen") {
        class07Students.push(studentName);
        console.log(`${studentName} has been added to the class`)
    } else if(class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    } else if(studentName === "") {
        console.log("You cannot add an empty string to a class");
    } else {
        class07Students.push(studentName);
        console.log(`Student ${studentName} has been added to the class`);
    }
}

function getNumberOfStudents() {
    return `There are ${class07Students.length} students in the class`;
}

// addStudentToClass("Poly");
// addStudentToClass("Queen");
// addStudentToClass("     Dory");
// addStudentToClass("Zari       ");
// addStudentToClass("             ");
// addStudentToClass("Bari");
// addStudentToClass("Lory");
// addStudentToClass("Queen");

// console.log(class07Students);
// console.log(getNumberOfStudents());
const class07Students = [];

function addStudentToClass(studentName) {

    if(studentName === "Queen") {
        class07Students.push(studentName);
    } else {
        if(class07Students.includes(studentName)) {
            console.log(`Student ${studentName} is already in the class`);
        } else if (class07Students.length >= 6) {
            console.log("Cannot add more students to class 07");
        } else {
            if(studentName === "") {
                console.log("You cannot add an empty string to a class");
            } else {
                class07Students.push(studentName);
            }
        }
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

// Add some students to the class.
// Add more students than there is space for
// Add a student that is already in the class
// Add the Queen to a full class
// Call the getNumberOfStudents to log out the number of students.

addStudentToClass("Poly");
addStudentToClass("Lory");
addStudentToClass("Dory");
addStudentToClass("Zari");
addStudentToClass("Vali");
addStudentToClass("Bari");
addStudentToClass("Fari");
addStudentToClass("Queen");
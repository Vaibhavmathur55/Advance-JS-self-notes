// Pretend that this response is coming from the server
const students = [
  { name: "harry", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

//this function is used when we need to enroll students in the database
//the 'callback' function we placed as parameter is just a normal function with only the name provided as 'callback'
function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled"); //Message-1
    callback();
  }, 1000);
}
//this function is used to fetch students from database
function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      //forEach() itself is a callback function.
      str += `<li> ${student.name}</li>`; //here we created a new string that stores the name of student allotted to it
    });
    document.getElementById("students").innerHTML = str; // here we are fetching the name of student using certain DoM methods
    console.log("Students have been fetched"); //Message-2
  }, 2000);
}
//now we made a newStudent variable, and stored information of a random student in it, and then passed the information to the enrollStudent() function.
let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent, getStudents);

// This Tutorial is about Object in JavaScript

let lecture = 10;
let section = 3;
let title = "JavaScript";

// const course = {
//     lecture: 10,
//     section: 3,
//     title: "JavaScript",
//     notes: {
//         introduction: "Welcome to Js course"
//     },
//     enroll() {
//         console.log("You are sucessfully enrolled");
//     }
// }

// factory function
function createCourse(title) {
  return {
    lecture: 10,
    section: 3,
    title: title,
    notes: {
      introduction: "Welcome to Js course",
    },
    enroll() {
      console.log("You are sucessfully enrolled");
    },
  };
}

// const course=createCourse("JavaScript");
// console.log(course);

// contructor function
function Course(title) {
  (this.title = title),
    (this.enroll = function () {
      console.log("You are sucessfully enrolled");
    });
}
const course = new Course("JavaScript");
// To delete a function
delete course.title;
// To create a function
course.checkEnrollment = function () {
  console.log("30 users are enrolled");
};
console.log(course);

course.checkEnrollment();
course.enroll();

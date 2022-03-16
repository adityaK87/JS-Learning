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
// const course = new Course("JavaScript");
// To delete a function
// delete course.title;

// To create a function
// course.checkEnrollment = function () {
  // console.log("30 users are enrolled");
// };
// console.log(course);

// course.checkEnrollment();
// course.enroll();



const Course_1= new Function('title',`
this.title = title,
this.enroll = function () {
  console.log("You are sucessfully enrolled");
} 
`)
const course_2 = new Course_1('JavaScript');
course_2.enroll();


// Primitive Datatype
// let number =10;
// Pass by value
// let number_2=number
// number=15

// console.log(number)
// console.log(number_2)

//Reference Datatype
// let obj={ number:10}

//Pass by Reference
// let obj_2=obj;
// obj.number=15;

// console.log(obj);
// console.log(obj_2);

const course={
  title:'JavaScript',
  enroll() {
    console.log("You are sucessfully enrolled");
  }
}
// const course_1={...course}
// course_1.title="C++";

// const course_1=Object.assign({},course)
// course_1.title="C++";

// for in loop
// for (let key in course){
//   console.log(key , course[key]);
// } 

const course_1= {};
// for of loop
for(let key of Object.keys(course)){
  course_1[key]= course[key]
}
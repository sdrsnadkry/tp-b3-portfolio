const num = 1;

const str = "hello";

const isTrue = true;

//student details

const studentName = "Sunil Basnet";
const studentAge = 22;
const studentAddress = "Kathmandu";

//object
//key value pair
const student = {
  firstName: "Ram",
  "last-name": "Bahadur",
  age: 23,
  isMale: true,
  address: {
    dist: "Kathmandu",
    country: "Nepal",
    zip: 44600,
    location: {
      houseNo: 1,
      street: "Back",
    },
  },
};
const student2 = {
  firstName: "Ram2",
  "last-name": "Bahadur2",
  age: 23,
  isMale: true,
  address: {
    dist: "Kathmandu2",
    country: "Nepal2",
    zip: 44600,
    location: {
      houseNo: 1,
      street: "Back",
    },
  },
};
student2.firstName = "Hari";

console.log(student2)

//Array
//index based / indices
//comma separated values
// 0,1,2,3,4,5
const students = [1, true, student, "Sita", "Gita", "Rita"];

students[0] = "Hari";

console.log(students)

// console.log(students)

//Array methods
// students.push(1000)
students.pop();

// fruits.shift();
// fruits.unshift("Lemon");

const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon"];

console.log(fruits.toString())

// fruits.length

console.log(fruits[Math.floor(fruits.length / 2)]);

// console.log(Math.round(2.51));



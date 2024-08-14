const student = "Sujit";
const string = "Hello" + " " + student;
//template string
const stringWithTl = `Hello ${student} ${string}`;

const studentObj = {
  name: `Sujit`,
  address: "Ktm",
  age: 18,
  hasBread: true,
};

// for (const key in studentObj) {
//   console.log(`Student's ${key} is ${studentObj[key]} `);
// }

const keys = Object.keys(studentObj);
const values = Object.values(studentObj);
const entries = Object.entries(studentObj);

//function
//function declaration
function add(a,b) {
  console.log(a+ b)
}
add(1,2)
//function expression
//anonymous function
const sum = function (a, b) {
  console.log(a + b);
};
//arrow function
const sumOfNum = (a,b) => {
  console.log(a+ b)
}
sumOfNum(10,20)
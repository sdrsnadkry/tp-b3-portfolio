
const student =  { id: 10, name: "Name10", age: 29, location: "Location10" }


// const name = student.name
// const age = student.age
// const locations = student.location

//object destructuring
// const {id, name, age: renamedAge} = student

// spread operator in object -> ...objectName

// const copyStudent = student
// copyStudent.name = "COpy Name 10"

//shallow copy
const copyS2 = {...student, location: "Updated location 10"}
// copyS2.name = "copyS2 Name 10"


// console.log(copyS2)
// console.log(student)


const arrays = [
    { id: 1, name: "Name1", age: 20, location: "Location1" },
    { id: 2, name: "Name2", age: 21, location: "Location2" },
    { id: 3, name: "Name3", age: 22, location: "Location3" },
    { id: 4, name: "Name4", age: 22, location: "Location4" },
    { id: 5, name: "Name5", age: 22, location: "Location4" },
    { id: 6, name: "Name6", age: 22, location: "Location4" },
    { id: 7, name: "Name7", age: 22, location: "Location4" },
    { id: 8, name: "Name8", age: 22, location: "Location4" },
    { id: 9, name: "Name9", age: 22, location: "Location4" },
    { id: 10, name: "Name10", age: 29, location: "Location10" },
];

//array destructuring
// const [student1, student2, s3, s4] = arrays
//Spread operator in array

const  copyArray = [...arrays]

const [s0, s1] = copyArray





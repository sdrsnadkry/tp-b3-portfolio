// //Data types

// // 1. Number

// //keywords
// // const

// // keyword variableName operator value

// let results = null;

// //const is always constant
// const a = 10;

// //re declare
// // const a = 20;

// // a = 20;

// const b = 20;

// const sum = a + b;
// results = a + b;

// // console.log(results);

// // console.log(a, b, sum);

// // let

// let x = 20;
// x = 40;

// let y = 40;

// // let y= 40;
// let sumXY = x + y;

// results = y - x;
// // console.log(results);

// // var

// var a1 = 1;

// a1 = 3;

// var a2 = 2;

// var a2 = 1000;

// var sumA1A2 = a1 + a2;

// // odd even

// const reminder = a1 % 2;

// // 2. String

// const name1 = "John";

// const name2 = "Alice";

// const nameSum = name1 + name2;

// const random1 = 1;

// const random2 = "1";

// const random3 = 3;

// //type conversion
// // console.log(String(Number(random2)) + random3 + random1);
// // console.log(nameSum)

// // 3. Boolean

// const isMale = true;

// const value = null;

// //falsy
// const apple = undefined;
// const apple2 = null;

// // 4. Object

// // 5. Array

// const aa1 = 1;

// const aa2 = "1";

// //Scope

// //block scope
// const isEqual = aa1 == aa2;

// if (isEqual) {
//   var aaaa = 1;

//   // console.log(aaaa);
// } else {
//   // console.log(aaaa);

//   console.log("Nos are not equal");
// }

// //global scope

// if (true) {
//   if (true) {
//     if (true) {
//       // console.log(aa1);
//     } else {
//     }
//   } else {
//   }
// } else {
// }

// function sumOfTwoNumber(a, b) {
//   return a + b;
// }

// sumOfTwoNumber(1, 2);
// sumOfTwoNumber(10, 20);
// sumOfTwoNumber(100, 200);

// const sumOfNUmber = sumOfTwoNumber(5, 6);
// const sumOfNUmber1 = sumOfTwoNumber(50, 60);

// console.log(sumOfNUmber, sumOfNUmber1);

function divideNumber(num1, num2) {
  if (num1 / num2 === 100) {
    console.log("first case");
  } else if (num1 / num2 === 50) {
    console.log("second case");
  } else if (num1 / num2 === 20) {
    console.log("third case");
  } else {
    console.log("Default case");
  }
}

function divUsingSwitch(num1, num2) {
  switch (num1 / num2) {
    case 100:
      console.log("first case");
      break;
    case 50:
      console.log("second case");
      break;
    case 20:
      console.log("third case");
      break;
    default:
      console.log("Default case");
  }
}

// divUsingSwitch(100, 50);
// divideNumber(100, 2);
// divideNumber(100, 5);
// divideNumber(100, 50);

function compareUsingSwitch(a, b) {
  switch (a === b) {
    case true:
      console.log("Both are equal");
      break;

    default:
      console.log("Both are not equal");
      break;

  }
}

compareUsingSwitch(1,"1")

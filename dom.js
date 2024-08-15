// const heading = document.getElementById("text")
// heading.innerText = "Sujit"

// const names = document.getElementsByClassName("name")

const query = document.querySelector(".name");
// const queryAll = document.querySelectorAll("#text")

// const queryId = document.querySelector("#text")

query.innerText = "Hello";
query.innerHTML = "<span>Hello<span>";

query.style.backgroundColor = "red";

function changeImage() {
  const image = document.querySelector("#image");

  image.src = "https://www.w3schools.com/images/colorpicker2000.webp";
}

const button = document.querySelector("#button");

button.addEventListener("click", changeImage);

const addTwoNumber = (a, b) => {
  console.log(a + b);
};

const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", function () {
  const number1 = document.querySelector("#number1").value;

  const number2 = document.querySelector("#number2").value;

  const sum = Number(number1) + Number(number2);

  document.querySelector("#addResult").innerHTML = `<b>${sum}</b>`

});

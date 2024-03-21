const countElementValue = document.querySelector("#value");
let countValue = 0;
const decreaseElement = document.querySelector(".decrease");
decreaseElement.addEventListener("click", () => {
  countValue--;
  countElementValue.innerText = countValue;
  console.log(`This Btn decrease ${countValue}`);
});
const resetElement = document.querySelector(".reset");
resetElement.addEventListener("click", () => {
  countValue = 0;
  countElementValue.innerText = countValue;
  console.log(`Reset Btn Display zero ${countValue}`);
});
const increaseElement = document.querySelector(".increase");
increaseElement.addEventListener("click", () => {
  countValue++;
  countElementValue.innerText = countValue;
  console.log(`This the increase Btn ${countValue}`);
});

console.log(`is the count value ok ${countValue} `);
// console.log(countValue);

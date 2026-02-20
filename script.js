const numberInput = document.getElementById("numberInput");
const btn = document.getElementById("btn");
const evenResult = document.getElementById("evenResult");
const oddResult = document.getElementById("oddResult");
document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", function () {
    evenResult.textContent = "";
    oddResult.textContent = "";

    const numbers = numberInput.value
      .split(",")
      .map((num) => Number(num.trim()));
    const evens = [];
    const odds = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
      } else {
        odds.push(numbers[i]);
      }
    }
    evenResult.textContent = "Evens: " + evens.join(", ");
    oddResult.textContent = "Odds: " + odds.join(", ");
    evenResult.style.color = "green";
    oddResult.style.color = "red";
    evenResult.style.fontWeight = "bold";
    oddResult.style.fontWeight = "bold";
  });
});

console.log("Hello, world!");

const tags = ["vegan", "gluten-free", "dairy-free"];
const prices = [11.99, 5.99, 9.25, 3.0];

console.log(tags);
console.log(prices);

const burgerPrice = 11.99;
const friesPrice = 5.99;
const tacoPrice = 9.25;
const drinkPrice = 3.0;
const taxRate = 0.08;

const orderBtn = document.querySelector("#orderBtn");

orderBtn.addEventListener("click", placeOrder);

function placeOrder() {
  console.log("Button clicked");

  const burgers = Number(document.querySelector("#burger").value);
  const fries = Number(document.querySelector("#fries").value);
  const tacos = Number(document.querySelector("#tacos").value);
  const drinks = Number(document.querySelector("#drink").value);

  const subtotal =
    burgers * burgerPrice +
    fries * friesPrice +
    tacos * tacoPrice +
    drinks * drinkPrice;

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  document.querySelector("#subtotal").textContent = "$" + subtotal.toFixed(2);

  document.querySelector("#tax").textContent = "$" + tax.toFixed(2);

  document.querySelector("#total").textContent = "$" + total.toFixed(2);
}

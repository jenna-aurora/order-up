console.log("Hello, world!");

const tags = ["vegan", "gluten-free", "dairy-free"];
const prices = [11.99, 5.99, 9.25, 3.0];
const taxRate = 0.08;

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
  tagText.textContent += tags[i];

  if (i < tags.length - 1) {
    tagText.textContent += " · ";
  }
}

const orderBtn = document.querySelector("#orderBtn");

orderBtn.addEventListener("click", placeOrder);

function placeOrder() {
  console.log("Button clicked");

  const burgers = Number(document.querySelector("#burger").value);
  const fries = Number(document.querySelector("#fries").value);
  const tacos = Number(document.querySelector("#tacos").value);
  const drinks = Number(document.querySelector("#drink").value);

  const quantities = [burgers, fries, tacos, drinks];

  let subtotal = 0;

  for (let i = 0; i < prices.length; i++) {
    subtotal += prices[i] * quantities[i];
  }

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  document.querySelector("#subtotal").textContent = "$" + subtotal.toFixed(2);

  document.querySelector("#tax").textContent = "$" + tax.toFixed(2);

  document.querySelector("#total").textContent = "$" + total.toFixed(2);
}

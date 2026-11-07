console.log("Hello, world!");

const tags = ["vegan", "gluten-free", "dairy-free"];
const prices = [11.99, 5.99, 9.25, 3.0];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " . ";
}

let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}
document.querySelector("#total").textContent = "$" + total;

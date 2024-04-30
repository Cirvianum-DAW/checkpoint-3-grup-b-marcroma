const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

const quantityInput = document.getElementById("quantity");
const productInput = document.getElementById("product");

function addProductsToSelect() {
  // Obtenim el selector del DOM
  const select = document.getElementById("product");
  const option = document.createElement("option");
  option.value = "";

  // Obtenim els productes

  // Creem les opcions del selector
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.text = product.name;
    option.hidden = product.price;
    select.appendChild(option);
  });
};

function calculatePricePerQuantity() {
  const quantity = quantityInput.value;

  const product = productInput.value;
  const productPrice = productInput.hidden;

  
} 

// EventListeners... CHANGE
quantityInput.addEventListener("change", function (e) {
  calculatePricePerQuantity();
});

productInput.addEventListener("change", function (e) {
  calculatePricePerQuantity();
});

addProductsToSelect();

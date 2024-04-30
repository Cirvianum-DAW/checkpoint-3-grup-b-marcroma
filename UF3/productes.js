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

// Sel·leccionem l'input de la quantitat de productes.
const quantitiInput = document.getElementById("quantity");

// Sel·leccionem l'input del selector de productes.
const productInput = document.getElementById("product");

// Sel·leccionem l'input on es mostrarà el preu calculat entre el producte i la quantitat.
const priceInput = document.getElementById("price");

function addProductsToSelect() {
  // Obtenim el selector del DOM
  const select = document.getElementById("product");
  const option = document.createElement("option");
  option.value = "";

  // Obtenim els productes
  // Creem les opcions del selector
  products.forEach((product) => {
    const option = document.createElement("option");

    // Contindrà el preu del producte.
    option.value = product.price;

    // Contindrà el nom del producte.
    option.text = product.name;

    // Inserim la opció dins el select de productes.
    select.appendChild(option);
  });
}

// Funció que calcularà el preu del producte sel·leccionat segons la quantitat.
function calculatePricePerQuantity() {
  // El valor del camp de priceInput serà el preu del producte multiplicat per la quantitat sel·leccionada.
  priceInput.value = productInput.value * quantitiInput.value;
}

// EventListeners... CHANGE
quantitiInput.addEventListener("change", function (e) {
  calculatePricePerQuantity();
});

productInput.addEventListener("change", function (e) {
  calculatePricePerQuantity();
});

// Cridem la funció que insereix els productes dins el select.
addProductsToSelect();

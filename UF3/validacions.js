// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);

  // Validació del nom...
  const name = nameInput.value;
  const nameRegex = "/[0-9]/";

  console.log(name);

  if (name.length < 3 || (name.length > 55 || name.match(nameRegex))) {
    // Si no és vàlid...

    displayError(nameInput, "El nom no és vàlid.");
    return;
  } else {
    removeExistingError(nameInput);
  }
}

// addEventListeners...
nameInput.addEventListener("input", function (e) {
  validateName();
});

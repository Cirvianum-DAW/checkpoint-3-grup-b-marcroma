// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

const messageInput = document.getElementById("message");

const quantityInput = document.getElementById("quantity");
const submitButton = document.getElementById("submit");

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

  // Comprovem la llargada del nom i que no contingui números
  if (name.length < 3 || name.length > 55) {
    // Si no és vàlid... mostrem l'error.
    displayError(nameInput, "El nom no és vàlid.");
    return;
  } else {
    // Si és vàlid... esborrem l'error.
    removeExistingError(nameInput);
  }
}

function validateSurname() {
  removeExistingError(surnameInput);

  const surname = surnameInput.value;

  console.log(surname);

  // Comprovem la llargada del cognom i que no contingui números
  if (surname.length < 3 || surname.length > 55) {
    // Si no és vàlid... mostrem l'error.
    displayError(surnameInput, "El cognom no és vàlid.");
    return;
  } else {
    // Si és vàlid... esborrem l'error.
    removeExistingError(surnameInput);
  }
}

function validateEmail() {
  removeExistingError(emailInput);

  const email = emailInput.value;
  const emailRegex = "/^[^@]+@[^@]+.[^@]+$/";

  console.log(email);

  // Comprovem que l'email contingui una @ i un .
  if (!email.match(emailRegex)) {
    displayError(emailInput, "L'Email no és vàlid.");
    return;
  } else {
    // Si és correcte...
    removeExistingError(emailInput);
  }
}

function validateAge() {
  removeExistingError(ageInput);

  const age = ageInput.value;

  // Si l'usuari és menor
  if (age < 18) {
    displayError(ageInput, "L'usuari ha de ser major d'edat.");
    return;
  } else {
    // Si és major...
    removeExistingError(ageInput);
  }
}

function validateMessage() {
  removeExistingError(messageInput);

  const message = messageInput.value;

  // Si el missatge no té entre 10 i 200 caràcters...
  if (message.length < 10 || message.length > 200) {
    displayError(
      messageInput,
      "El missatge ha de tenir entre 10 i 200 caràcters."
    );
    return;
  } else {
    removeExistingError(messageInput);
  }
}

function validateQuantity() {
  removeExistingError(quantityInput);

  const quantity = quantityInput.value;

  // Si la quantitat seleccionada és menys que 1 o més que 10...
  if (quantity < 1 || quantity > 10) {
    // Mostrar error
    displayError(quantityInput, "La quantitat ha de ser entre 1 i 10.")
    return;
  }

  removeExistingError(quantityInput);
}

function validateSubmit() {
  validateQuantity();
}

// addEventListeners... INPUT
nameInput.addEventListener("input", function (e) {
  validateName();
});

surnameInput.addEventListener("input", function (e) {
  validateSurname();
});

emailInput.addEventListener("input", function (e) {
  validateEmail();
});

messageInput.addEventListener("input", function (e) {
  validateMessage();
});

// addEventListeners... CHANGE
ageInput.addEventListener("change", function (e) {
  validateAge();
});

quantityInput.addEventListener("change", function (e) {
  validateQuantity();
})

// addEventListeners... SUBMIT
submitButton.addEventListener("submit", function (e) {
  validateSubmit();
})



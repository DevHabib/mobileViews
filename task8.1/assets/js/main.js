var input = document.querySelector("#phone");

window.intlTelInput(input, {
  initialCountry: "auto",
  dropdownContainer: document.body,
  utilsScript: '/assets/js/utils.js'
})
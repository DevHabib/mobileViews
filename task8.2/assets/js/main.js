var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true,
  utilsScript: "assets/js/utils.js",
  autoHideDialCode: false,
  dropdownContainer: document.body
});
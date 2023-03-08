// Get elements from the DOM
const color = document.querySelector(".color");
const colorInput = document.querySelector(".color-input");

// Add input event listener
colorInput.addEventListener("input", () => {
  /*Set background of the color div to the color set in the input field*/
  color.style.backgroundColor = colorInput.value;
});

const display = document.getElementById("display");

function appendToDisplay(input) {
  const currentValue = display.value;

  // Check if the last character in the display is an operator
  const lastCharIsOperator =
    currentValue.length > 0 &&
    ["+", "-", "*", "/", "."].includes(currentValue[currentValue.length - 1]);

  // Append the input only if it's a number or the last character is not  an operator
  if (
    input !== "" &&
    (!lastCharIsOperator || !["+", "-", "*", "/", "."].includes(input))
  ) {
    display.value += input;
  }
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

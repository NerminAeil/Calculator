const display = document.getElementById("display");
function deleteLast() {
  if ((display.value = "Error")) {
    display.value = "";
  }
  display.value = display.value.slice(0, -1);
}
function appendToDisplay(input) {
  const operators = ["+", "-", "%", "×", "÷"];
  if (operators.includes(input)) {
    const lastchar = display.value.slice(-1);
    if (operators.includes(lastchar)) {
      return;
    }
  }
  display.value += input;
}
function calculate() {
  if (display.value.trim() === "") {
    return;
  }
  try {
    let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
function start() {
  display.value = "00";
}
function clearDisplay() {
  display.value = "";
}

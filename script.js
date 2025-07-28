let display = document.querySelector("#display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}
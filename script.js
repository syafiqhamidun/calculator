const display = document.getElementById("display");

const appendtoDisplay = (input) => {
    display.value += input;
};

const clearDisplay = () => {
    display.value = "";
};

const calculate = () => {

    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "error"
    }
    
}

document.getElementById('addButton').addEventListener('click', function() {
    // Get the current number
    var numberElement = document.getElementById('number');
    var currentNumber = parseInt(numberElement.innerText);

    // Increment the number by 1
    var newNumber = currentNumber + 1;

    // Update the number displayed on the webpage
    numberElement.innerText = newNumber;
});
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
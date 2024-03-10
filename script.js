const outputBox = document.getElementById("output");
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");


const romanNumbers = {
    1: ["I", "X", "C", "M"],
    2: ["II", "XX", "CC", "MM"],
    3: ["III", "XXX", "CCC", "MMM"],
    4: ["IV", "XL", "CD"],
    5: ["V", "L", "D"],
    6: ["VI", "LX", "DC"],
    7: ["VII", "LXX", "DCC"],
    8: ["VIII", "LXXX", "DCCC"],
    9: ["IX", "XC", "CM"]
}

const numeralToRoman = (number) => {


}




const eventHandler = () => {

    const number = Number(numberInput.value) || "";


    if (number === "") {
        outputBox.textContent = "Please enter a valid number";
    } else if (number < 0) {
        outputBox.textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        outputBox.textContent = "Please enter a number less than or equal to 3999"
    }

    outputBox.style.display = "block";


}


convertBtn.addEventListener("click", eventHandler)
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
    9: ["IX", "XC", "CM"],
    0: ["", "", "", ""]
}

const numeralToRoman = (number) => {
    const numberStr = number.toString()
    return number.toString()
        .split("")
        .reverse()
        .map((number, index) => {
            return romanNumbers[number][index];

        })
        .reverse()
        .join("")

}




const eventHandler = () => {

    const number = Number(numberInput.value) || "";
    outputBox.style.display = "block";
    if (number === "") {
        outputBox.textContent = "Please enter a valid number";
        return;
    } else if (number < 0) {
        outputBox.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (number >= 4000) {
        outputBox.textContent = "Please enter a number less than or equal to 3999"
        return;
    }
    outputBox.innerHTML = numeralToRoman(number);



}

convertBtn.addEventListener("click", eventHandler)
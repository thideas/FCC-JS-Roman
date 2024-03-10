const outputBox = document.getElementById("output");
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");


const eventHandler = () => {

    const number = Number(numberInput.value) || "";

    if (number === "") {
        outputBox.textContent = "Please enter a valid number Please enter a valid number Please enter a valid number Please enter a valid number";
    }

    outputBox.style.display = "block";


}


convertBtn.addEventListener("click", eventHandler)
document.addEventListener("DOMContentLoaded", () => {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const calculateButton = document.querySelector(".calculate");
    const resetButton = document.querySelector(".reset");
    const resultText = document.querySelector(".text p");

    calculateButton.addEventListener("click", (event) => {
        event.preventDefault();

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Validate inputs
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultText.textContent = "Provide a valid weight and height.";
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100; // Convert height to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        // Determine BMI status
        let status;
        if (bmi <= 18.4) {
            status = "underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "normal weight";
        } else if (bmi >= 25.0 && bmi <= 39.9) {
            status = "overweight";
        } else {
            status = "obese";
        }

        // Display result
        resultText.textContent = `Your BMI is ${bmi}. You are ${status}.`;
    });

    resetButton.addEventListener("click", () => {
        // Clear inputs and result text
        heightInput.value = "";
        weightInput.value = "";
        resultText.textContent = "Provide a valid weight and height.";
    });
});

/*
Vaido Adomavičiaus kodas:
console.log('BMI');
 
const height = document.querySelector('.inputHeight');
const weight = document.querySelector('.inputWeight');
const calculateBtn = document.querySelector('.bmiBtn');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');
let bmi;
 
calculateBtn.addEventListener('click', _ => {
    if (isNaN(parseFloat(height.value)) && !isNaN(parseFloat(weight.value))) {
        result.innerText = 'Provide a valid height';          
        result.style.color = 'white';    
    } else if (!isNaN(parseFloat(height.value)) && isNaN(parseFloat(weight.value))) {
        result.innerText = 'Provide a valid weight';
        result.style.color = 'white';
    } else if (isNaN(parseFloat(height.value)) && isNaN(parseFloat(weight.value))) {
        result.innerText = 'Provide a valid height and weight';
        result.style.color = 'white';
    } else {
        bmi = parseFloat(weight.value)/((parseFloat(height.value)/100)*(parseFloat(height.value)/100));
 
        if (bmi < 18.5) {
            result.innerText = `Underweight: ${bmi.toFixed(2)}`;
            result.style.color = 'gold';
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerText = `Normal: ${bmi.toFixed(2)}`;
            result.style.color = 'green';
        } else if (bmi >= 25 && bmi < 40) {
            result.innerText = `Overweight: ${bmi.toFixed(2)}`;
            result.style.color = 'crimson';
        } else {  result.innerText = `Obese🍔: ${bmi.toFixed(2)}`;
            result.style.color = 'black';
        };
        resetBtn.style.display = 'block';
        console.log(parseFloat(weight.value)/((parseFloat(height.value)/100)*(parseFloat(height.value)/100)));
    }
});
 
resetBtn.addEventListener('click', _ => {
    height.value = '';
    weight.value = '';
    result.innerText = 'Provide a valid height and weight';  
    result.style.color = 'white';
    resetBtn.style.display = 'none';
 
});
 
 
 
console.log(parseFloat(height.value));
console.log(parseFloat(weight.value));
 
*/
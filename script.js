let totalSummons = 0;

function calculate() {
    totalSummons = 0;
    // This for LL Step up Summons.
    let probability = parseFloat(document.getElementById('probabilityStepUp').value);
    let chronosCrystals = parseInt(document.getElementById('chronosCrystalsStepUp').value);
    let tickets= parseInt(document.getElementById('tickets').value);
    let ticketprobability = parseInt(document.getElementById('ticketprobability').value);

    // Check if inputs are valid
    if (isNaN(probability) || isNaN(chronosCrystals)) {
        alert("Please enter valid numbers.");
        return;
    }

    const array_name = [300, 500, 700, 1000, 1000];

    while (chronosCrystals >= 0) {
        let i = 0;
        while (i < array_name.length) {

            chronosCrystals = chronosCrystals - array_name[i];
            if (chronosCrystals < 0) {
                break;
            }
            totalSummons += array_name[i] / 100;
            i++;
        }
        if (i == array_name.length) {
            totalSummons += 10;
        }
    }

    console.log("probability: " + probability / 100);
    console.log("summons: " + totalSummons);

    // Calculate chance to get the character
    let chance = 1 - ((1-(1- Math.pow((1 - ticketprobability / 100), tickets)))*(1-(1-Math.pow((1 - probability / 100), totalSummons))));

    // Display results
    document.getElementById('totalSummons').textContent = totalSummons;
    if (chance>0.9999){
        chance=0.9999
    }
    document.getElementById('chance').textContent = (chance * 100).toFixed(2); // Display as percentage

    // Show the result div
    document.getElementById('resultStepUp').style.display = 'block';

}

function calculate1() {
    let totalSummons1 = 0;
    let guaranteedSparkingProbability1 = 0;
    // This for Mega Rising Summons.
    let probability = parseFloat(document.getElementById('probabilityMegaRising').value);
    let chronosCrystals = parseInt(document.getElementById('chronosCrystalsMegaRising').value);
    guaranteedSparkingProbability1 = parseFloat(document.getElementById('guaranteedSparkingProbabilityMegaRising').value);

    // Check if inputs are valid
    if (isNaN(probability) || isNaN(chronosCrystals)) {
        alert("Please enter valid numbers.");
        return;
    }

    const array_name = [1000, 1000, 1000];

    while (chronosCrystals >= 0) {
        let i = 0;
        while (i < array_name.length) {
            chronosCrystals = chronosCrystals - array_name[i];
            if (chronosCrystals < 0) {
                break;
            }
            totalSummons1 += array_name[i] / 100;
            i++;
        }
        if (i === array_name.length) {
            totalSummons1 += 10;
        }
    }

    console.log("probability: " + probability / 100);
    console.log("summons: " + totalSummons1);

    // Calculate chance to get the character
    let chance1 = 1 - ((1-(1-Math.pow((1 - probability / 100), (totalSummons1 / 10) * 9))) *(1-(1-Math.pow((1 - guaranteedSparkingProbability1 / 100), totalSummons1 / 10))));
    // Display results
    document.getElementById('totalSummons1').textContent = totalSummons1;
    if (chance1>0.9999){
            chance1=0.9999
        }
    document.getElementById('chance1').textContent = (chance1 * 100).toFixed(2); // Display as percentage

    // Show the result div
    document.getElementById('resultMegaRising').style.display = 'block';
}

function calculate2() {
    let totalSummons2 = 0;
    let noOfDoubleRates=0;
    // This for Ultra Summons.
    let probability = parseFloat(document.getElementById('probabilityUltraRising').value);
    let chronosCrystals = parseInt(document.getElementById('chronosCrystalsUltraRising').value);
    let guaranteedSparkingProbability2 = parseFloat(document.getElementById('guaranteedSparkingProbabilityUltraRising').value);
    const isUltraSelect = document.getElementById('isUltra');
    const isUltra = isUltraSelect.value === "true";

    // Check if inputs are valid
    if (isNaN(probability) || isNaN(chronosCrystals)) {
        alert("Please enter valid numbers.");
        return;
    }

    const array_name = [1000, 1000, 1000];

    while (chronosCrystals >= 0) {
        let i = 0;
        while (i < array_name.length) {

            chronosCrystals = chronosCrystals - array_name[i];
            if (chronosCrystals < 0) {
                break;
            }
if (i==1){
            noOfDoubleRates++;
        }


            totalSummons2 += array_name[i] / 100;
            i++;

        }
        

        if (i == array_name.length) {
            totalSummons2 += 10;
        }
    }

    console.log("probability: " + probability / 100);
    console.log("summons: " + totalSummons2);
    let chance2=0;
    if (isUltra==false){
        chance2 = 1 - (
    (1 - (1 - Math.pow((1 - probability / 100), (totalSummons2 / 10) * 9))) *
    (1 - (1 - Math.pow((1 - guaranteedSparkingProbability2 / 100), totalSummons2 / 10)))
);
    }
        else{
            chance2 = 1 - ((1-(1-Math.pow((1 - probability / 100), (totalSummons2 / 4) * 3))) *(1-(1-Math.pow((1 - 0.7 / 100), totalSummons2 / 4))));
        }
    // Display results
    document.getElementById('totalSummons2').textContent = totalSummons2;
    if (chance2>0.9999){
            chance2=0.9999
        }
    document.getElementById('chance2').textContent = (chance2 * 100).toFixed(2); // Display as percentage

    // Show the result div
    document.getElementById('resultUltraRising').style.display = 'block';

}

function calculate3() {
    let totalSummons3 = 0;
    let guaranteedSparkingSummons3 = 0;
    // This for Goku&Bardock Summons.
    let probability = parseFloat(document.getElementById('probabilityLimitedRising').value);
    let chronosCrystals = parseInt(document.getElementById('chronosCrystalsLimitedRising').value);
    const isMainNewCharacterSelect = document.getElementById('isMainNewCharacterSelect');
    const isMainNewCharacter = isMainNewCharacterSelect.value === "true";

    // Check if inputs are valid
    if (isNaN(probability) || isNaN(chronosCrystals)) {
        alert("Please enter valid numbers.");
        return;
    }

    const array_name = [500, 700, 1000];

    while (chronosCrystals >= 0) {
        let i = 0;
        while (i < array_name.length) {
            chronosCrystals = chronosCrystals - array_name[i];
            if (chronosCrystals < 0) {
                break;
            }
            totalSummons3 += array_name[i] / 100;
            i++;
        }
        if (i === array_name.length) {
            guaranteedSparkingSummons3++;
        }
    }

    console.log("probability: " + probability / 100);
    console.log("summons: " + totalSummons3);
    let chance3=0;
    // Calculate chance to get the character
    if (isMainNewCharacter==false){
        chance3 = 1 - Math.pow((1 - probability / 100), totalSummons3);
    }
        else{
            chance3 = 1 - ((1-(1-Math.pow((1 - probability / 100), totalSummons3)))*(1-(1-Math.pow((1 - 1.5 / 100), guaranteedSparkingSummons3))));
        }
    // Display results
    document.getElementById('totalSummons3').textContent = totalSummons3;
    if (chance3>0.9999){
            chance3=0.9999
        }
    document.getElementById('chance3').textContent = (chance3 * 100).toFixed(2); // Display as percentage

    // Show the result div
    document.getElementById('resultLimitedRising').style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); // Select the button element
    button.addEventListener('click', calculate);
});


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); // Select the button element
    button.addEventListener('click', calculate1);
});


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); // Select the button element
    button.addEventListener('click', calculate2);
});


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); // Select the button element
    button.addEventListener('click', calculate3);
});

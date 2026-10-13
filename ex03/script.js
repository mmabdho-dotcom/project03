let count = 0;

const countDisplay = document.getElementById("count");

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

document.getElementById("increase")
    .addEventListener("click", function() {
        count++;
        updateDisplay();
    });

document.getElementById("decrease")
    .addEventListener("click", function() {
        count--;
        updateDisplay();
    });

document.getElementById("reset")
    .addEventListener("click", function() {
        count = 0;
        updateDisplay();
    });
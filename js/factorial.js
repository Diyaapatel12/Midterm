function calculateFactorial() {
    const input = document.getElementById("userInput").value;
    const outputDiv = document.getElementById("output");

    // Validate input
    if (input === "" || input < 0) {
        outputDiv.textContent = "Please enter a non-negative number.";
        return;
    }

    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i;
    }

    outputDiv.textContent = `${input}! = ${result}`

}
function factorial() {
    let number = prompt("Enter a number");

    number = Number(number);
    
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return factorial();
    }

    if (number < 0) {
        alert("Please enter a positive number.");
        return factorial();
    }
    
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    if (number === 0) {
        result = 1; 
    }

    if (confirm(`The factorial of ${number} is ${result}.\nDo you want to continue?`)) {
        factorial();
    } else {
        alert("Thank you for using the factorial calculator!");
    }
}

factorial();

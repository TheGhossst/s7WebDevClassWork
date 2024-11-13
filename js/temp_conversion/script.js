const celsiusEl = document.getElementById('celsius-btn');

celsiusEl.addEventListener('click', () => {
    const fahrenheit = Number(document.getElementById('fahrenheit').value);
    if (!fahrenheit) {
        document.getElementById('celsiusResult').textContent = 'Please enter a valid number';
    } else {
        const result = ((fahrenheit - 32) * 5) / 9;
        document.getElementById('celsiusResult').textContent = `${result.toFixed(2)} °C`;
    }
});

const fahrenheitEl = document.getElementById('fahrenheit-btn');

fahrenheitEl.addEventListener('click', () => {
    const celsius = Number(document.getElementById('celsius').value);
    if (!celsius) {
        document.getElementById('fahrenheitResult').textContent = 'Please enter a valid number';
    } else {
        const result = (celsius * 9) / 5 + 32;
        document.getElementById('fahrenheitResult').textContent = `${result.toFixed(2)} °F`;
    }
});

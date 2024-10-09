document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('numpad-display');
    
    document.querySelectorAll('.numpad-btn').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.dataset.value;
            if (value) {
                display.value += value;
            }
        });
    });

    // Clear button
    document.getElementById('clear').addEventListener('click', function() {
        display.value = '';
    });

    // Backspace button
    document.getElementById('backspace').addEventListener('click', function() {
        display.value = display.value.slice(0, -1);
    });

    // Enter button
    document.getElementById('enter').addEventListener('click', function() {
        alert('Entered: ' + display.value);
    });
});

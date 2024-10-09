// script.js

// Function to append a number to the display
function appendNumber(number) {
    const display = document.getElementById('numpad-display');
    display.value += number;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('numpad-display');
    display.value = '';
}

// Function to delete the last character in the display
function backspace() {
    const display = document.getElementById('numpad-display');
    display.value = display.value.slice(0, -1);
}

// Function to handle the enter action
function submit() {
    const display = document.getElementById('numpad-display');
    alert('Submitted: ' + display.value); // Change this to your desired submit behavior
}

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

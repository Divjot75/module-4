// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the button element
    const button = document.getElementById('clickButton');

    // Add an event listener to the button
    button.addEventListener('click', function() {
        alert('Button was clicked!'); // Show an alert when the button is clicked
    });

});

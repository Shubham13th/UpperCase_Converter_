
// Get references to the elements
const textarea = document.getElementById('sam-text');
const convertButton = document.getElementById('btn');

// Add a click event listener to the button
convertButton.addEventListener('click', function () {
    // Get the text from the textarea
    const inputText = textarea.value;

    // Convert the text to uppercase
    const upperCaseText = inputText.toUpperCase();

    // Update the textarea with the uppercase text
    textarea.value = upperCaseText;
});



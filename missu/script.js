// Function to show the question modal when an image cover is clicked
function showQuestion(itemNumber) {
    document.getElementById('question' + itemNumber).style.display = 'flex';
}

// Function to reveal the image and hide the black cover when the "Confirm" button is clicked
function revealImage(itemNumber) {
    // Show the image
    document.getElementById('image' + itemNumber).style.display = 'block'; 
    
    // Hide the black cover
    document.getElementById('item' + itemNumber).querySelector('.cover').style.display = 'none'; 
    
    // Hide the question modal
    document.getElementById('question' + itemNumber).style.display = 'none'; 
}

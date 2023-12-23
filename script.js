// Get buttons
const noButton = document.getElementById('noBtn');
const yesButton = document.getElementById('yesBtn');

// Function to move the 'No' button to a random position
function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
  noButton.disabled = false;
}

// Disable 'No' button and move it on click
noButton.addEventListener('click', () => {
  noButton.style.display = 'none'; // Hide the button
  moveButton(); // Move the button to a random position
  setTimeout(() => {
    noButton.style.display = 'block'; // Show the button after a short delay
  }, 100); // Adjust the delay as needed
});

// Redirect to the second page on 'Yes' button click
yesButton.addEventListener('click', () => {
  window.location.href = 'thankyou.html';
});

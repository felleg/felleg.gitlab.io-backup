let currentIndex = -1; // Current index of the displayed photo
let score = 0; // Initial score
const photos = ["/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv/photos/felixleger.jpg", ];

// Function to display a random photo
function displayRandomPhoto() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * photos.length);
    } while (randomIndex === currentIndex); // Ensure the same photo is not displayed consecutively
    currentIndex = randomIndex;
    document.getElementById('photo').src = photos[currentIndex];
    document.getElementById('photo-number').textContent = `Photo ${currentIndex + 1}`;
}

// Function to handle when user knows the person
function knowPerson() {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    if (currentIndex === photos.length - 1) {
        endGame();
    } else {
        displayRandomPhoto();
    }
}

// Function to handle when user doesn't know the person
function dontKnowPerson() {
    score--;
    document.getElementById('score').textContent = `Score: ${score}`;
    if (currentIndex === photos.length - 1) {
        endGame();
    } else {
        displayRandomPhoto();
    }
}

// Function to end the game
function endGame() {
    document.getElementById('photo-container').innerHTML = '<p>Thank you for playing!</p>';
    document.getElementById('buttons').style.display = 'none';
}

displayRandomPhoto();


let currentIndex = -1; // Current index of the displayed photo
let score = 0; // Initial score
const photos = ["/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv/photos/felixleger.jpg", "/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv/photos/justin-hornosty.png", "/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv/photos/quentin-esnault.png", "/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv/photos/jean-raphael-theriault.png", "/name-that-portage-cybertech-employee-243987978423987fsdalksadflqrweoyzv/photos/chantal-nicol.png"];

// Shuffle the photos array before starting the game
shuffleArray(photos);

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display the next photo
function displayNextPhoto() {
    currentIndex++;
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
        displayNextPhoto();
    }
}

// Function to handle when user doesn't know the person
function dontKnowPerson() {
    score--;
    document.getElementById('score').textContent = `Score: ${score}`;
    if (currentIndex === photos.length - 1) {
        endGame();
    } else {
        displayNextPhoto();
    }
}

// Function to end the game
function endGame() {
    document.getElementById('photo-container').innerHTML = '<p>Thank you for playing!</p>';
    document.getElementById('buttons').style.display = 'none';
}

// Display the first photo
displayNextPhoto();


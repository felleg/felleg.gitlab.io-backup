let currentIndex = -1; // Current index of the displayed photo
let score = 0; // Initial score
const photos = [];

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
    document.getElementById('photo-number').textContent = `Photo ${currentIndex + 1} / ${photos.length}`;
    document.getElementById('photo-name').textContent = "";
}

let totalPhotos = 0; // Total number of photos viewed
let correct = 0;

// Function to handle when user knows the person
function knowPerson() {
    score++;
    correct++;
    totalPhotos++;
    updateScore();
    document.querySelector('.know-button').disabled = true; // Disable the button
    if (currentIndex >= photos.length - 1) {
        endGame();
    } else {
        displayNextPhoto();
        document.querySelector('.know-button').disabled = false;
    }
}

// Function to handle when user doesn't know the person
function dontKnowPerson() {
    score--;
    totalPhotos++;
    updateScore();
    document.querySelector('.dont-know-button').disabled = true; // Disable the button
    // Get the name of the photo
    const photoName = photos[currentIndex].split('/').pop().split('.')[0];

    // Display the name of the photo for 2 seconds
    document.getElementById('photo-name').innerHTML = `<p>${photoName}</p>`.replace(/_/g, " ");
    setTimeout(function() {
      if (currentIndex < photos.length - 1) {
        displayNextPhoto();
        document.querySelector('.dont-know-button').disabled = false;
      } else {
        endGame();
      }
    }, 2000)
}

function updateScore() {
    const percentage = totalPhotos === 0 ? 0 : Math.floor((correct / totalPhotos) * 100); // Round down the percentage
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score} (${percentage}%)`;

    // Update color based on score value
    if (score < 0) {
        scoreDisplay.style.color = 'red';
    } else {
        scoreDisplay.style.color = ''; // Reset color to default
    }
}

// Function to end the game
function endGame() {
    document.getElementById('photo-container').innerHTML = '<p>Thank you for playing!</p><p>If you want to include your photo in this game, please send it to me at felix.leger@portagecybertech.com :)';
    document.getElementById('buttons').style.display = 'none';
}

// Display the first photo
displayNextPhoto();


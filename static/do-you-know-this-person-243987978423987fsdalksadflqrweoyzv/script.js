let currentIndex = -1; // Current index of the displayed photo
let score = 0; // Initial score
const photos = ["/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Félix_Léger.jpg", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Isabelle_Bussières.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Denisse_Hernandez_Pulido.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Justin_Hornosty.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Alexandre_Rémillard.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Louis-Philippe_Tremblay.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Dorsaf_El_Mekki.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Audrey_Lemire.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Bugrahan_Tasdelen.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Jean-Denis_Paquette.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Chantal_Nicol.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Marie-Pier_Blanchet.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Dominique_Fortin.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Jean-Raphaël_Thériault.png", ];

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
    // Get the name of the photo
    const photoName = photos[currentIndex].split('/').pop().split('.')[0];

    // Display the name of the photo for 2 seconds
    document.getElementById('photo-name').innerHTML = `<p>${photoName}</p>`;
    setTimeout(function() {
      if (currentIndex < photos.length - 1) {
        displayNextPhoto();
      } else {
        endGame();
      }
    }, 2000)
}

// Function to end the game
function endGame() {
    document.getElementById('photo-container').innerHTML = '<p>Thank you for playing!</p>';
    document.getElementById('buttons').style.display = 'none';
}

// Display the first photo
displayNextPhoto();


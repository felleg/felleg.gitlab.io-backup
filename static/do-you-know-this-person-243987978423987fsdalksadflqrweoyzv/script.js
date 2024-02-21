let currentIndex = -1; // Current index of the displayed photo
let score = 0; // Initial score
const photos = ["/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Julien_Gruet.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Isabelle_Bussières.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Ryan_Pelicos.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Claire_Le_Moigne.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Shaun_MacDonald.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Eloise_Chakoue.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Denisse_Hernandez_Pulido.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Bea_Lapinska.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Tristan_Vacher.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Harmanpreet_Singh_Multani.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Justin_Hornosty.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Nicolas_Bélanger.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Trish_McNeely.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Alexandre_Rémillard.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Louis-Philippe_Tremblay.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Valerie_Boucher.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Don_Cuthbertson.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Jérémy_Lor.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Marc_St-Jacques.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Gulab_Karnani.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Dorsaf_El_Mekki.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Edouard_Talma.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Suzanne_Mandybura.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Valery_Doroshkov.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Abdelmalek_Belaid.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Julien_Lamarche.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Nathalie_Denis.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Michael_P_Moran.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Mathieu_Chouinard_Lavoie.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Antonio_Misaka.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Christian_Balcazar.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Patrick_Drolet.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Michael_Whitehead.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Audrey_Lemire.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Simon_Picard.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Camille_Blondiaux.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Antoine_Lafontaine.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Bruce_Levis.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Nadia_Brousseau.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Bugrahan_Tasdelen.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Jean-Denis_Paquette.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Andrew_Whitehead.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Chantal_Nicol.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Félix_Léger.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Marie-Pier_Blanchet.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Mac_Lapinski.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Dominique_Fortin.png", "/do-you-know-this-person-243987978423987fsdalksadflqrweoyzv/photos/Jean-Raphaël_Thériault.png", ];

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


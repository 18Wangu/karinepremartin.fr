/***************** Plume ou Peinture ou Modelage au clic ******************************/
const buttons = document.querySelectorAll(".icone");
const articles = document.querySelectorAll("article");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");
        articles.forEach(article => {
            if (article.id === target) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});




// Récupérez les éléments du carrousel pour l'article "plumes"
const containerPlumes = document.querySelector('#plumes .carousel-container');
const imagesPlumes = containerPlumes.querySelectorAll('img');
const prevBtnPlumes = document.getElementById('prevBtnPlumes');
const nextBtnPlumes = document.getElementById('nextBtnPlumes');
let currentImageIndexPlumes = 0;

// Fonction pour afficher l'image suivante pour l'article "plumes"
function showNextImagePlumes() {
    imagesPlumes[currentImageIndexPlumes].style.display = 'none';
    currentImageIndexPlumes = (currentImageIndexPlumes + 1) % imagesPlumes.length;
    imagesPlumes[currentImageIndexPlumes].style.display = 'block';
}

// Fonction pour afficher l'image précédente pour l'article "plumes"
function showPrevImagePlumes() {
    imagesPlumes[currentImageIndexPlumes].style.display = 'none';
    currentImageIndexPlumes = (currentImageIndexPlumes - 1 + imagesPlumes.length) % imagesPlumes.length;
    imagesPlumes[currentImageIndexPlumes].style.display = 'block';
}

// Gérez les événements de clic sur les boutons pour l'article "plumes"
nextBtnPlumes.addEventListener('click', showNextImagePlumes);
prevBtnPlumes.addEventListener('click', showPrevImagePlumes);

// Récupérez les éléments du carrousel pour l'article "peintures"
const containerPeintures = document.querySelector('#peintures .carousel-container');
const imagesPeintures = containerPeintures.querySelectorAll('img');
const prevBtnPeintures = document.getElementById('prevBtnPeintures');
const nextBtnPeintures = document.getElementById('nextBtnPeintures');
let currentImageIndexPeintures = 0;

// Fonction pour afficher l'image suivante pour l'article "peintures"
function showNextImagePeintures() {
    imagesPeintures[currentImageIndexPeintures].style.display = 'none';
    currentImageIndexPeintures = (currentImageIndexPeintures + 1) % imagesPeintures.length;
    imagesPeintures[currentImageIndexPeintures].style.display = 'block';
}

// Fonction pour afficher l'image précédente pour l'article "peintures"
function showPrevImagePeintures() {
    imagesPeintures[currentImageIndexPeintures].style.display = 'none';
    currentImageIndexPeintures = (currentImageIndexPeintures - 1 + imagesPeintures.length) % imagesPeintures.length;
    imagesPeintures[currentImageIndexPeintures].style.display = 'block';
}

// Gérez les événements de clic sur les boutons pour l'article "peintures"
nextBtnPeintures.addEventListener('click', showNextImagePeintures);
prevBtnPeintures.addEventListener('click', showPrevImagePeintures);


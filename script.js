
//////////////ACCUEIL///////////////////////

// Fonction pour gérer le menu burger
function toggleMenu(burgerButtonSelector, menuSelector) {
  let burgerButton = document.querySelector(burgerButtonSelector);
  let menu = document.querySelector(menuSelector);

  burgerButton.addEventListener("click", function () {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
}

// Fonction pour ajuster dynamiquement la transparence du header
function headerOpacite() {
  const header = document.querySelector(".custom-header");
  const wEcran = window.innerWidth;
  const maxW = 1200; // Largeur maximale où le header est totalement opaque
  const minW = 500;  // Largeur minimale où le header est totalement transparent

  // Calculer la transparence en fonction de la largeur de l'écran
  let opacite = 0.9; // Par défaut, totalement opaque
  if (wEcran < maxW) {
    opacite = Math.max((wEcran - minW) / (maxW - minW), 0);
  }

  // Appliquer le style dynamique
  header.style.backgroundColor = `rgba(229, 224, 220, ${opacite})`;
}

// Écouteur d'événement pour ajuster lors du redimensionnement
window.addEventListener("resize", headerOpacite);

// Appel initial pour appliquer le style dès le chargement de la page
document.addEventListener("DOMContentLoaded", headerOpacite);


/////////Partie Formulaire Accueil///////////

// Fonction pour générer les dates dans un menu déroulant
function genererDates(selectId, nbreJours = 30) {
  let ciblerElement = document.getElementById(selectId);
  let today = new Date();

  for (let i = 0; i < nbreJours; i++) {
    let optionDate = new Date(today);
    optionDate.setDate(today.getDate() + i);

    let option = document.createElement("option");
    option.value = optionDate.toISOString().split("T")[0]; // Format YYYY-MM-DD
    option.textContent = optionDate.toLocaleDateString(); // Format local
    ciblerElement.appendChild(option);
  }
}

// Fonction pour gérer la recherche
function setupSearch(buttonId, selectors) {
  let searchButton = document.getElementById(buttonId);

  searchButton.addEventListener("click", function () {
    let searchValues = selectors.map(selector => document.getElementById(selector).value);
    console.log(`Recherche : Hôtel ${searchValues[0]}, ${searchValues[1]} personne(s), Date d'arrivée : ${searchValues[2]}`);
  });
}

// Initialisation du DOM
document.addEventListener("DOMContentLoaded", function () {
  toggleMenu(".navbar-toggler", "#leftMenu"); // Menu burger
  genererDates("arrivalDate"); // Générer les dates dans le menu déroulant
  setupSearch("searchButton", ["hotelSelect", "numberOfPeople", "arrivalDate"]); // Configurer la recherche
});



// //////////////DETAILS HOTEL///////////////////////

// inverser photos cards Feu
document.addEventListener("DOMContentLoaded", function () {
  let photo1 = document.getElementById("photoFeu1");
  let photo2 = document.getElementById("photoFeu2");

  // Ajouter un événement au clic sur une photo
  photo1.addEventListener("click", inversePhotos);
  photo2.addEventListener("click", inversePhotos);

  function inversePhotos() {
    // Échanger les sources des deux images
    let complete = photo1.src;
    photo1.src = photo2.src;
    photo2.src = complete;
  }
});

// inverser photos cards Terre
document.addEventListener("DOMContentLoaded", function () {
  let photo1 = document.getElementById("photoTerre1");
  let photo2 = document.getElementById("photoTerre2");

  // Ajouter un événement au clic sur une photo
  photo1.addEventListener("click", inversePhotos);
  photo2.addEventListener("click", inversePhotos);

  function inversePhotos() {
    // Échanger les sources des deux images
    let complete = photo1.src;
    photo1.src = photo2.src;
    photo2.src = complete;
  }
});

// inverser photos cards Air
document.addEventListener("DOMContentLoaded", function () {
  let photo1 = document.getElementById("photoAir1");
  let photo2 = document.getElementById("photoAir2");

  // Ajouter un événement au clic sur une photo
  photo1.addEventListener("click", inversePhotos);
  photo2.addEventListener("click", inversePhotos);

  function inversePhotos() {
    // Échanger les sources des deux images
    let complete = photo1.src;
    photo1.src = photo2.src;
    photo2.src = complete;
  }
});

// inverser photos cards Eau
document.addEventListener("DOMContentLoaded", function () {
  let photo1 = document.getElementById("photoEau1");
  let photo2 = document.getElementById("photoEau2");

  // Ajouter un événement au clic sur une photo
  photo1.addEventListener("click", inversePhotos);
  photo2.addEventListener("click", inversePhotos);

  function inversePhotos() {
    // Échanger les sources des deux images
    let complete = photo1.src;
    photo1.src = photo2.src;
    photo2.src = complete;
  }
});
////////////////RESERVER///////////////////////


//affichage dynamique des options alimentaires
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("reservationForm");
  let breakfastOption = document.getElementById("breakfastOption");
  let mealOption = document.getElementById("mealOption");
  let dietaryRestrictions = document.getElementById("dietaryRestrictions");
  let submitBtn = document.getElementById("submitBtn");

  // Montrer/Cacher les options alimentaires
  [breakfastOption, mealOption].forEach(option => {
    option.addEventListener("change", () => {
      dietaryRestrictions.classList.toggle("d-none", !breakfastOption.checked && !mealOption.checked);
    });
  });

  
  // Validation et Récapitulatif
  submitBtn.addEventListener("click", () => {
    // Fonction de validation
    if (!validateForm()) {
      // Arrête le processus si une validation échoue
      return;
    }
    // Exemple de validation basique
    let fullName = document.getElementById("fullName").value;
    let hotelChoice = document.getElementById("hotelChoice");
    let roomPrice = parseInt(hotelChoice.options[hotelChoice.selectedIndex].dataset.price);
    let guests = parseInt(document.getElementById("guests").value);
    let arrivalDate = new Date(document.getElementById("arrivalDate").value);
    let departureDate = new Date(document.getElementById("departureDate").value);
    let days = (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);

    if (isNaN(days) || days < 1) {
      alert("La date de départ doit être au moins le lendemain de la date d'arrivée !");
      return;
    }

    // Calcul des options supplémentaires
    let total = days * roomPrice;
    if (document.getElementById("chauffeurOption").checked) total += days * 11;
    if (breakfastOption.checked) total += days * guests * 15;
    if (mealOption.checked) total += days * guests * 25;

  });
});


// ////////////////MODALE RESERVATION///////////////////////
document.addEventListener("DOMContentLoaded", () => {
  //let form = document.getElementById("reservationForm");
  let submitBtn = document.getElementById("submitBtn");
  let recapDetails = document.getElementById("recapDetails");
  let confirmPaymentBtn = document.getElementById("confirmPayment");

  // Validation et ouverture de la modale
  submitBtn.addEventListener("click", () => {
    if (!validateForm()) {
      return; // Arrête si la validation échoue
    }

    // Récupère les données du formulaire
    let fullName = document.getElementById("fullName").value;
    let hotelChoice = document.getElementById("hotelChoice");
    let roomPrice = parseInt(hotelChoice.options[hotelChoice.selectedIndex].dataset.price);
    let guests = parseInt(document.getElementById("guests").value);
    let arrivalDate = new Date(document.getElementById("arrivalDate").value);
    let departureDate = new Date(document.getElementById("departureDate").value);
    let days = (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);

    // Calcul des options supplémentaires
    let total = days * roomPrice;
    if (document.getElementById("chauffeurOption").checked) total += days * 11;
    if (document.getElementById("breakfastOption").checked) total += days * guests * 15;
    if (document.getElementById("mealOption").checked) total += days * guests * 25;

    // Insère les détails de la réservation dans la modale
    recapDetails.innerHTML = `
    <p><strong>Nom :</strong> ${fullName}</p>
    <p><strong>Hôtel :</strong> ${hotelChoice.options[hotelChoice.selectedIndex].text}</p>
    <p><strong>Nombre de personnes :</strong> ${guests}</p>
    <p><strong>Dates :</strong> Du ${arrivalDate.toLocaleDateString()} au ${departureDate.toLocaleDateString()}</p>
    <p><strong>Options sélectionnées :</strong></p>
    <ul>
      ${document.getElementById("chauffeurOption").checked ? `<li>Chauffeur : 11€/jour</li>` : ""}
      ${document.getElementById("breakfastOption").checked ? `<li>Petit déjeuner : 15€/personne/jour</li>` : ""}
      ${document.getElementById("mealOption").checked ? `<li>Repas : 25€/personne/repas</li>` : ""}
    </ul>
  `;

    // Ajouter les choix alimentaires si petit déjeuner ou repas sont cochés
    if (document.getElementById("breakfastOption").checked || document.getElementById("mealOption").checked) {
      // Récupération du texte affiché pour le régime alimentaire
      let dietChoiceText = document.getElementById("dietChoice").options[
        document.getElementById("dietChoice").selectedIndex
      ].text;
    
      // Récupération du texte affiché pour les restrictions alimentaires
      let restrictionsText = document.getElementById("restrictions").options[
        document.getElementById("restrictions").selectedIndex
      ].text;
    
      // Ajout des informations dans le récapitulatif
      recapDetails.innerHTML += `
        <p><strong>Régime alimentaire :</strong> ${dietChoiceText === "Aucun" ? "Aucun" : dietChoiceText}</p>
        <p><strong>Restrictions alimentaires :</strong> ${restrictionsText === "Aucune" ? "Aucune" : restrictionsText}</p>
      `;
    }
  
  // Ajout du total au récapitulatif
recapDetails.innerHTML += `<p><strong>Total :</strong> ${total}€</p>`;


    // Ouvre la modale Bootstrap
    let recapModal = new bootstrap.Modal(document.getElementById("recapModal"));
    recapModal.show();
  });

  // Gestion de la validation dans la modale
  confirmPaymentBtn.addEventListener("click", () => {
    // Une fois le bouton de paiement cliqué, affiche l'alerte
    alert("Merci pour votre confiance. Nous vous souhaitons un bon séjour parmi nous !");
  });
});


// //////////////VALIDATION REGEX FORMULAIRE///////////////////////
// Fonction de validation du formulaire
function validateForm() {
  let fullName = document.getElementById("fullName").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let arrivalDate = new Date(document.getElementById("arrivalDate").value);
  let departureDate = new Date(document.getElementById("departureDate").value);

  // Champs regex
  let nameRegex = /^[a-zA-Z\s]{2,50}$/;
  let addressRegex = /^[0-9]+\s[a-zA-Z\s]{1,150}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^[0-9\s\-\/]{10,14}$/;

  // Nom
  if (!nameRegex.test(fullName)) {
    document.getElementById("nameError").textContent = "Le nom doit contenir entre 2 et 50 caractères, sans caractères spéciaux.";
    return false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Adresse
  if (!addressRegex.test(address)) {
    document.getElementById("addressError").textContent = "Adresse invalide (numéro + rue requise).";
    return false;
  } else {
    document.getElementById("addressError").textContent = "";
  }

  // Email
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Veuillez entrer un email valide.";
    return false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Téléphone
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Le numéro doit contenir 10 chiffres ou être dans un format valide (avec -, /, ou espaces).";
    return false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Dates
  let days = (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);
  if (isNaN(days) || days < 1) {
    document.getElementById("arrivalDateError").textContent = "La date de départ doit être au moins le lendemain de la date d'arrivée.";
    document.getElementById("departureDateError").textContent = "Corrigez les dates pour poursuivre.";
    return false;
  } else {
    document.getElementById("arrivalDateError").textContent = "";
    document.getElementById("departureDateError").textContent = "";
  }

  return true; // Toutes les validations sont réussies
};

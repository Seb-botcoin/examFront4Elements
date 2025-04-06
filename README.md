
Exam Front
Utilsation de Boostrap 5.3, html, css, JS

git https://github.com/Seb-botcoin/examFront4Elements.git
gitpage https://seb-botcoin.github.io/examFront4Elements/

BOOTSTRAP
Je me suis tiré une balle dans le pied avec Boostrap. J'ai pensé que ça me ferai gagner du temps sur le formulaire, mais j'ai perdi enormement de temps à me débloquer lorsqu il a fallut inverser la logique des cards hotel. Notamment parce que le plus gros defaut de bootstrap est d'utiliser et réutiliser les mêmes noms de class. Ce qui fait qu'au début ça va très vite, mais dès qu'on commence a faire du redondant avec de légères variations alors on enchaine les conflits de class.
Au moins je retiendrai que Bootstrap c'est bien, mais par touches seulement et que le 100% Bootstrap c'est un coup a perdre plus de temps qu on n'en gagne.

HTML
W3C ok
indentation Ok
alt et title ok
meta desc renommage des images pour SEO

CSS
En complément de bootstrap mais essentiellement pour header et footer


JS : Conceptualisation

// Fonction pour gérer le menu burger
  Un événement click est attaché au bouton burger (burgerButton).
  À chaque clic, la fonction vérifie l'état actuel du menu (via menu.style.display) :
  Si display est égal à "block", il passe à "none".
  Sinon, il passe à "block".
  Cela permet de basculer dynamiquement entre les deux états.


// Fonction pour ajuster dynamiquement la transparence du header
principe : 
  Largeur ≥ maxW (1200px) : Le header est totalement opaque (transparence 0.9).
  Largeur ≤ minW (500px) : Le header est totalement transparent (transparence 0).
  Entre 500px et 1200px : La transparence est calculée proportionnellement à la largeur de l'écran.

  Sélectionne l'élément HTML correspondant au header via la classe .custom-header.
  Récupère la largeur actuelle de l'écran (window.innerWidth).
  Calcule la transparence (opacite) selon l'échelle définie entre une largeur minimale (minW) et maximale (maxW).
  Applique la transparence au style backgroundColor du header via une valeur RGBA dynamique.


// Fonction pour générer les dates dans un menu déroulant
  générer 30 dates à partir de la date du jour

  La boucle for itère de 0 à nbreJours - 1.
  À chaque itération, une nouvelle date (optionDate) est créée à partir de la date actuelle (today), puis modifiée pour correspondre au jour suivant grâce à setDate().


// inverser photos
  Un gestionnaire d'événement click est attaché à chacune des deux images.
  L'événement déclenche une fonction nommée inversePhotos() à chaque clic.
  La valeur src de la première image est temporairement sauvegardée.
  L'attribut src de la première image est remplacé par celui de la seconde image.
  L'attribut src de la seconde image est ensuite remplacé par la valeur sauvegardée.


// formulaire de réservation

  //affichage dynamique des options alimentaires
    objectif : Lorsque l'utilisateur coche ou décoche les options de repas ou petit-déjeuner, le formulaire est immédiatement mis à jour visuellement.
    Si des choix sont faits, les restrictions alimentaires deviennent accessibles.

    Si aucune option n'est sélectionnée (ni petit-déjeuner ni repas), la classe d-none est appliquée pour masquer la section.
    Si l'une des deux options est sélectionnée, la classe est supprimée pour afficher la section.


  // Validation et Récapitulatif
    valide un formulaire de réservation et calcule un récapitulatif détaillé du coût total en fonction des choix de l'utilisateur (hôtel, options, dates et invités).

    Gestionnaire d'événement pour soumission :
          L'événement click est associé au bouton de soumission (submitBtn).
          Lorsque l'utilisateur clique sur ce bouton, une série de validations et de calculs est déclenchée.

          Validation du formulaire :
          La fonction validateForm() est appelée pour vérifier l'intégrité des données du formulaire. Si la validation échoue, le processus est arrêté immédiatement avec un return.

          Extraction des données utilisateur :
          Nom complet (fullName) : Récupéré depuis le champ texte correspondant.
          Hôtel choisi (hotelChoice) : Correspond à l'option sélectionnée dans un menu déroulant, avec récupération de son prix via l'attribut data-price.
          Nombre d'invités (guests) : Converti en entier depuis un champ numérique.
          Dates (arrivalDate, departureDate) : Converties en instances d'objets Date depuis les champs date.

          Calcul de la durée du séjour :
          Le nombre de jours est calculé en soustrayant les deux dates (conversion en millisecondes), puis en divisant par la durée en millisecondes d'une journée.
          Une validation garantit que la durée est d'au moins 1 jour. Sinon, une alerte est affichée, et le processus est interrompu.

          Calcul du coût total :
          Tarif de la chambre : Multiplié par le nombre de jours.
          Options supplémentaires :
          Chauffeur : Ajoute 11 €/jour si sélectionné.
          Petit-déjeuner : Ajoute 15 €/jour/personne si sélectionné.
          Repas : Ajoute 25 €/jour/personne si sélectionné.


  // ////////////////MODALE RESERVATION///////////////////////
    Ce code effectue une validation du formulaire de réservation et génère un récapitulatif détaillé des informations saisies par l'utilisateur, incluant les calculs du coût total avec des options supplémentaires. Il affiche ensuite les informations dans une modale Bootstrap et finalise l'interaction avec un bouton de confirmation de paiement.

    Validation des données saisies :
    La fonction garantit que les données obligatoires (dates, nombre de jours, options, etc.) sont valides avant le traitement.

    Génération dynamique des détails :
    Les informations sont affichées sous forme structurée dans une modale pour offrir un aperçu clair et organisé de la réservation.



// //////////////VALIDATION REGEX FORMULAIRE///////////////////////
    Ce code valide les données saisies dans un formulaire avant de procéder à toute action ou soumission. Il assure que tous les champs obligatoires sont remplis correctement, respecte des formats spécifiques (via des expressions régulières) et vérifie la cohérence des dates. En cas d'erreurs, des messages d'avertissement sont affichés près des champs concernés.
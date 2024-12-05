// Initialise EmailJS avec votre identifiant utilisateur
(function () {
    emailjs.init("Amour"); // Remplacez "YOUR_USER_ID" par votre ID utilisateur
  })();
  
  // Gérer l'envoi du formulaire
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
  
    const serviceID = "service_xdxxcih"; // Remplacez "YOUR_SERVICE_ID" par l'ID de votre service
    const templateID = "template_fnbo128"; // Remplacez "YOUR_TEMPLATE_ID" par l'ID de votre modèle
  
    // Envoi des données du formulaire à EmailJS
    emailjs
      .sendForm(serviceID, templateID, this)
      .then(
        function (response) {
          // Afficher un message de succès
          alert("Message envoyé avec succès !"); 
        },
        function (error) {
          // Afficher un message d'erreur
          alert("Erreur lors de l'envoi : " + JSON.stringify(error));
        }
      );
  });
  
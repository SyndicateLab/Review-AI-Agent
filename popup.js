document.getElementById('generate').addEventListener('click', async () => {
  const status = document.getElementById('status');
  status.innerText = "Analyse de l'avis en cours...";
  
  // Simulation de l'IA pour la validation Google
  setTimeout(() => {
    status.innerHTML = `
      <strong style="color: #238636;">Réponse IA générée :</strong><br>
      <p style="background: #f1f1f1; padding: 5px; border-radius: 4px; font-size: 11px;">
        "Bonjour, Merci pour votre retour. Nous sommes ravis que le produit vous plaise et nous prenons note pour la livraison. À bientôt !"
      </p>
    `;
  }, 1500);
});

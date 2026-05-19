// Système d'analyse de flux et de ciblage d'intention
async function initArbitrage() {
    try {
        // Chargement des niches cibles depuis le fichier de tendances
        const response = await fetch('./trends.json');
        const data = await response.json();
        console.log("Statut du système :", data.status);
        
        // Détection de la provenance et des paramètres du visiteur
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('utm_source') || 'flux_direct';
        
        // Simulation du routage algorithmique selon l'intention d'achat
        data.target_niches.forEach(niche => {
            console.log(`[Routage] Analyse de la niche : ${niche.keywords} (${niche.traffic_intent})`);
        });

        // Mise à jour de l'interface utilisateur une fois la synchronisation terminée
        setTimeout(() => {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.style.display = 'none';
                const statusText = document.querySelector('p[style*="font-size: 12px"]');
                statusText.innerHTML = `<span style="color: #00c853; font-weight: bold;">✔ Flux synchronisés avec succès (${source})</span>`;
            }
        }, 1000);

    } catch (error) {
        console.error("Erreur lors de la synchronisation des données de flux :", error);
    }
}

// Lancement automatique au chargement de la page
document.addEventListener('DOMContentLoaded', initArbitrage);

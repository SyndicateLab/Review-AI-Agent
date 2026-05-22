async function initArbitrage() {
    try {
        const response = await fetch('./trends.json');
        const data = await response.json();
        console.log("Statut du système :", data.status);
        
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('utm_source') || 'flux_direct';
        
        data.target_niches.forEach(niche => {
            console.log(`[Routage] Analyse de la niche : ${niche.keywords} (${niche.traffic_intent})`);
        });

        setTimeout(() => {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.style.display = 'none';
                
                // 1. Mise à jour du texte de statut
                const statusText = document.querySelector('p[style*="font-size: 12px"]');
                statusText.innerHTML = `<span style="color: #00c853; font-weight: bold;">✔ Flux synchronisés avec succès (${source})</span>`;
                
                // 2. Injection automatique du bouton de capture de valeur
                const container = document.querySelector('.container');
                const btnLink = document.createElement('a');
                btnLink.href = "https://www.shopify.com"; // On mettra ton lien d'affilié exact ici
                btnLink.target = "_blank";
                btnLink.style = "display: inline-block; background: #0052cc; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; margin-top: 25px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,82,204,0.3); transition: background 0.2s;";
                btnLink.innerText = "ACCÉDER À L'AGENT IA DE RECHERCHE DE PRODUITS";
                
                // Effet au survol du bouton
                btnLink.onmouseover = () => btnLink.style.background = '#0066ff';
                btnLink.onmouseout = () => btnLink.style.background = '#0052cc';
                
                container.appendChild(btnLink);
            }
        }, 1000);

    } catch (error) {
        console.error("Erreur lors de la synchronisation :", error);
    }
}

document.addEventListener('DOMContentLoaded', initArbitrage);

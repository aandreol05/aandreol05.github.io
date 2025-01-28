const API_KEY = "eccf8200898239c01b81626293da9f1d";

// Coordonnées des villes
const villes = {
    "Niort": { lat: 46.3167, lon: -0.4667 },
    "Rio": { lat: -22.9068, lon: -43.1729 },
    "Reykjavik": { lat: 64.1355, lon: -21.8954 }
};

// Exécuter la fonction lors du changement de ville
document.getElementById("selectVille").addEventListener("change", fetchMeteo);

// Récupérer la météo pour la ville sélectionnée
async function fetchMeteo() {
    let villeChoisie = document.getElementById("selectVille").value;
    let { lat, lon } = villes[villeChoisie];

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fr`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        // Mettre à jour les éléments HTML
        document.getElementById("nomVille").textContent = villeChoisie;
        document.getElementById("temperature").textContent = `${data.main.temp}°C`;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("country").textContent = data.sys.country;

        // Récupérer et afficher l'icône météo
        let iconCode = data.weather[0].icon;
        document.getElementById("iconeMeteo").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (error) {
        console.error("Erreur lors de la récupération des données météo:", error);
    }
}

// Charger la météo de la ville par défaut
fetchMeteo();

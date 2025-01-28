document.addEventListener("DOMContentLoaded", function () {
    let selectVille = document.getElementById("selectVille");

    // Écouteur d'événement pour détecter le changement de sélection
    selectVille.addEventListener("change", afficheVille);

    function afficheVille() {
        let nomVilleChoisie = selectVille.value;
        let villes = document.getElementsByClassName("ville");

        for (let i = 0; i < villes.length; i++) {
            if (villes[i].id === nomVilleChoisie) {
                villes[i].style.display = "flex";
            } else {
                villes[i].style.display = "none";
            }
        }
    }

    // Afficher la ville sélectionnée au chargement de la page
    afficheVille();
});

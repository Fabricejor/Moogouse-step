//4eme partie
const { Personne } = require("./connect");
require("dotenv").config({ path: "config.env" }); // pour charger les variables denvironement du fhicer config.env //npm install dotenv

//? Effectuer des mises à jour classiques en exécutant Find, Edit, puis Save
Personne.findOne({
    name: "Fabrice", //On a utilisé un nom car les id seront aleatoires lors de la creation de du model etant donné quon a rien preciser
})
    .then((personne) => {
        // Vérifier si la personne existe et si elle a un champ favoriteFoods défini
        if (!personne || !personne.favoriteFoods) {
            console.log(
                "Aucune personne trouvée avec l'ID spécifié ou favoriteFoods non défini."
            );
            return;
        }

        // Ajouter "hamburger" à la liste des aliments préférés de la personne
        personne.favoriteFoods.push("hamburger");

        // Enregistrer la personne mise à jour dans la base de données
        return personne.save();
    })
    .then((personneMiseAJour) => {
        if (personneMiseAJour) {
            console.log("Personne mise à jour avec succès :", personneMiseAJour);
        }
    })
    .catch((err) => {
        console.error("Erreur lors de la mise à jour de la personne :", err);
    });

//? Trouver une personne par son nom et mettre à jour son âge à 20 ans
Personne.findOneAndUpdate(
    { name: "Fabrice" }, // Critère de recherche : nom de la personne
    { age: 20 }, // Nouvelle valeur pour le champ 'age'
    { new: true } // Options pour retourner le document mis à jour
  )
    .then(personneMiseAJour => {
      if (personneMiseAJour) {
        console.log("Personne mise à jour 20ans :", personneMiseAJour);
      } else {
        console.log("Aucune personne trouvée avec le nom spécifié.");
      }
    })
    .catch(err => {
      console.error("Erreur lors de la mise à jour de la personne :", err);
    });
  
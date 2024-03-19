//5eme partie //! CE SCRIPT ne sexecute qune seule fois la 2e fois le script plante lors de la recherche
//? Supprimer un document en utilisant model.findByIdAndRemove

const { Personne } = require("./connect");
require("dotenv").config({ path: "config.env" });

// Supprimer une personne par son _id
Personne.findOneAndDelete(
    {
        name: "Gojo" //meme chose on utilse un nom a la place de l'id
    }
)
    .then(personneSupprimee => {
        if (personneSupprimee) {
            console.log("Personne supprimée avec succès :", personneSupprimee);
        } else {
            console.log("Aucune personne trouvée avec l'ID spécifié.");
        }
    })
    .catch(err => {
        console.error("Erreur lors de la suppression de la personne :", err);
    });

//? supprimer toutes les maries
// Supprimer toutes les personnes dont le nom est "Mary"
Personne.removeAllListeners({ name: "Mary" }, (err, result) => {
    if (err) {
        console.error("Erreur lors de la suppression des personnes :", err);
        return;
    }

    console.log(`${result.deletedCount} personnes portant le nom 'Mary' ont été supprimées avec succès.`);
});

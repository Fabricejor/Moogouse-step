const { Personne } = require('./connect');

//3eme partie
require('dotenv').config({ path: "config.env" });// pour charger les variables denvironement du fhicer config.env //npm install dotenv
//? Utiliser model.find() pour effectuer une recherche dans votre base de données
Personne.find(
    {
        age: 35,//Gojo devrait sortir normalement si la ligne est commenté tous les element de la base seront affiché
    }
    ) .then(doc => {
        console.log("model.find() =>",doc)
      })
      .catch(err => {
        console.error(err)
      })
 
//? model.findONe()      
Personne.findOne(
    {
        favoriteFoods: "Orange",//Jordan devrait sortir
    }
    ) .then(doc => {
        console.log("Model findOne():",doc)
      })
      .catch(err => {
        console.error(err)
      })
 
//? model.findById()
Personne.findById(
    {
        _id: "65f8ee40ad6ecd346b1e5f88",//!RAMOS devrait sortir sauf quon a pas precisé les id lors de la creations
    }
    ) .then(doc => {
        console.log("Model findById():",doc)
      })
      .catch(err => {
        console.error(err)
      })


      // LES AIDES de la derniere questions

Personne.find({ favoriteFoods: "burritos" }) // Recherche par aliment préféré
.sort({ name: 1 }) // Trier par nom dans l'ordre croissant
.limit(2) // Limiter les résultats à deux documents
.select({ age: 0 }) // Masquer le champ 'age'
.exec() // Exécuter la requête et retourner une promesse
.then(personnes => {
  console.log("Personnes qui aiment les burritos :", personnes);
})
.catch(err => {
  console.error("Erreur lors de la recherche des personnes :", err);
});

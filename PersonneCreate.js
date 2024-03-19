//2eme partie
require('dotenv').config({ path: "config.env" }); // les var d'environnement
//? 3- Créer et sauvegarder un enregistrement d'un modèle :
const { Personne } = require('./connect'); // Importer le modèle de personne depuis le fichier connect.js

// Créer une nouvelle personne
const newPersonne = new Personne({
    name: 'Jordan',
    age: 22,
    favoriteFoods: ['Orange', 'Yassa']
});

// Enregistrer la personne dans la base de données
newPersonne.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error("Erreur lors de la creation", err)
    });


//? 4- Créer plusieurs enregistrements avec model.create()
//  tableau d'objets représentant les personnes à créer
const arrayOfPeople = [
    { name: 'Fabrice', age: 25, favoriteFoods: ['Sushi', 'Nem'] },
    { name: 'Ramos', age: 30, favoriteFoods: ['Thieb', 'Guinar'] },
    { name: 'Gojo', age: 35, favoriteFoods: [] }
  ];
  
  // Créer plusieurs personnes en utilisant Model.create()
  Personne.create(arrayOfPeople)
    .then(peopleCreated => {
      console.log("Personnes créées avec succès :", peopleCreated);
    })
    .catch(err => {
      console.error("Erreur lors de la création des personnes :", err);
    });
  
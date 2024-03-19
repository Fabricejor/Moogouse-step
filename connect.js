//fihcier de connection a la db 
//! nb sur mongosh vu quon a pa specifié la BD tous est enregistrer dans "test" par default
//? 1-Installation et configuration de Mongoose :
require('dotenv').config({ path: "config.env" });// pour charger les variables denvironement du fhicer config.env //npm install dotenv

const mongoose = require('mongoose');//on importe la biblio mongouse
//on tente la connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à la base de données MongoDB Atlas établie avec succès !");
  })
  .catch((err) => {
    console.error("Erreur lors de la connexion à la base de données :", err);
  });

// le modele de personne imposé
//? 2-Créez une personne avec ce prototype :
const personneSchema = new mongoose.Schema({
    name: { type: String, required: true }, // required =obligatoire
    age: { type: Number, default: 0 }, // si lage nest pas renseigne 0 par defaut
    favoriteFoods:{ type: [String], default: [] } // Tableau vide si aucun plat n'est renseigner
  });

// personneshema c comme un type et Personne c la variable
const Personne = mongoose.model('Personne', personneSchema);

// Créer une nouvelle instance de personne
const nouvellePersonne = new Personne({
  name: 'Jean', // Exemple de nom
  age: 30, // Exemple d'âge
  favoriteFoods: ['Pizza', 'Pâtes'] // Exemple d'aliments préférés
});

// Création du modèle ou composant de personne et on l'exporte
module.exports = { Personne };
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
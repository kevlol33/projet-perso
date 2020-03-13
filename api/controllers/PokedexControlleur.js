/************************************************************
*                       Importation 
*************************************************************/
const
    express = require('express'),
    router = express.Router(),
    path = require('path'),
    Pokedex = require('../database/Pokemon')
/************************************************************
*                        Controleur Page Pokedex
*************************************************************/
module.exports ={

/************************************************************
*                        METHODE GET 
*************************************************************/
    //*** Permet de rester sur la pasge home ***//
    get: async (req, res) => {
        //** cela me permet de recuperer les pokemon dans la base de données **//
        const dbPoke = await Pokedex.find({})
        /* tu me redirige sur la page pokedex avec les donnée des pokémon */ 
        res.render('Pokedex',
        dbPoke)

    },

}
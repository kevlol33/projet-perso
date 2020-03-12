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
        const dbPoke = await Pokedex.find({})
        res.render('Pokedex',
        dbPoke)

    },

}
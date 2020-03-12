/************************************************************
*                       Importation 
*************************************************************/
const
    Sujets = require('../database/Sujet'),
    express = require('express'),
    router = express.Router(),
    path = require('path'),
    sujetforum = require('../database/Sujet')

/************************************************************
*                       Controleur du forum 
*************************************************************/
module.exports = {
    //*** Permet de rester sur la pasge forum ***//
    get: async (req, res) => {
        //** cela me permet de recuperer les sujet dans la base de donnée **//
        const dbsujets = await Sujets.find({})
        /* tu me redirige sur la page Home avec les données des sujets */
        res.render('Home', {
            dbsujets
        })
    },
}
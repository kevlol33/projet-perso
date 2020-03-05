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
<<<<<<< HEAD
    //*** Permet de rester sur la pasge Home ***//
    get: (req, res) => {
        res.render('Home')
=======
    //*** Permet de rester sur la pasge forum ***//
    get: async (req, res) => {
        const dbsujets = await Sujets.find({})
        res.render('Home', {
            dbsujets
        })
>>>>>>> c8e7a8f4484e3b7c25127b4afcb2acd8ea903b4f
    },
}
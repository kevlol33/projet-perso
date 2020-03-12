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
    //*** Permet de rester sur la pasge forum avec les donnée des sujet ***//
    get: async (req, res) => {
        //** cette constance permet d'aller chercher les sujet dans la base de donnée **//
        const dbsujets = await Sujets.find({})
        res.render('Forum', {
            dbsujets
        })
    },
}
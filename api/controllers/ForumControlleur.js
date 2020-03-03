/************************************************************
*                       Importation 
*************************************************************/
const 
    express = require('express'),
    router = express.Router(),
    path = require('path'),
    sujetforum = require('../database/Sujet')

/************************************************************
*                       Controleur du forum 
*************************************************************/
module.exports = {
    //*** Permet de rester sur la pasge forum ***//
    get: (req, res) => {
        res.render('Forum')
    },
}
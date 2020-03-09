/************************************************************
*                       Importation 
*************************************************************/
const
    Sujets = require('../database/Sujet'),
    path = require('path'),
    fs = require('fs')

/************************************************************
*                       Controleur Sujet 
*************************************************************/
module.exports = {
/************************************************************
*                        Méthode GET 
*************************************************************/
    get: async (req, res) => {
        const dbsujetsID = await Sujets.findById(req.params.id)
        res.render('Sujet', {
            dbsujetsID
        })
    },
}
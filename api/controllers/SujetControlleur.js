/************************************************************
*                       Importation 
*************************************************************/
const
    Com         = require('../database/Commentaire'),
    Sujets      = require('../database/Sujet'),
    path        = require('path'),
    fs          = require('fs')

/************************************************************
*                       Controleur Sujet 
*************************************************************/
module.exports = {
/************************************************************
*                        Méthode GET 
*************************************************************/
    get: async (req, res) => {
        const 
            dbsujetsID      = await Sujets.findById(req.params.id),
            dbcommentaireID = await Com.findById(req.params.id)
        res.render('Sujet', {
            dbsujetsID, dbcommentaireID
        })
    },
/************************************************************
*                        Méthode POST
*************************************************************/
    //*** Permet d'enregistrer un commentaire ***//
    post: async (req, res) => {
        console.log('ok');
        
        //* Condition si il n'y a pas texte dans le commentaire *//
        if(!req.session) {
            console.log('pas content');
            
            //* tu me redirige sur la page précédente *//
            console.log(err);
            
            res.redirect('/404')
        } 
        //* Sinon *//
        else {
            console.log('cooool');
            
            //* Tu me cree le commantaire *//
            Com.create({
                createDate: new Date(),
                Id: req.params.id,
                username: req.session.username,
                description: req.body.description
            },            
            
            console.log('com ok'))

        }
            res.redirect('/Forum')
        }
            
    }
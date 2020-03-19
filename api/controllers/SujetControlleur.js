/************************************************************
*                       Importation 
*************************************************************/
const
    commentaire = require('../database/Commentaire'),
    Sujets      = require('../database/Sujet'),
    Path        = require('path'),
    Fs          = require('fs')

/************************************************************
*                       Controleur Sujet 
*************************************************************/
module.exports = {
/************************************************************
*                        Méthode GET 
*************************************************************/
    get: async (req, res) => {
        /* ces constance me permet de recupere les sujets et les commentaire dans la base de données */
        const 
            dbSujetsID      = await Sujets.findById(req.params.id),
            dbCommentaireID = await Commentaire.find({sujetID: req.params.id})
            console.log(dbcommentaireID);
            
            /* redirige moi vers sur la page sujet avec les donnée sujets ainsi que les donnée commentaires */
        res.render('Sujet', {
            dbSujetsID, dbCommentaireID
        })
    },
/************************************************************
*                        Méthode POST
*************************************************************/
    //*** Permet d'enregistrer un commentaire ***//
    post: async (req, res) => {
                
        //* Condition si il n'y a pas texte dans le commentaire *//
        if(!req.session) {
            console.log('pas content');
            
            //* tu me redirige sur la page précédente *//
            console.log(err);
            
            res.redirect('/Forum')
        } 
        //* Sinon *//
        else {
            console.log('cooool');
            
            //* Tu me cree le commantaire *//
            Commentaire.create({
                createDate: new Date(),
                sujetID: req.params.id,
                username: req.session.username,
                description: req.body.description
            },            
            
            console.log('com ok'))

        }
            res.redirect('back')
        }
            
    }
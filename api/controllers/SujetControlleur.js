/************************************************************
*                       Importation 
*************************************************************/
const
    Commentaire = require('../database/Commentaire'),
    Sujet = require('../database/Sujet'),
    Path = require('path'),
    Fs = require('fs')

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
            dbSujetsID = await Sujet.findById(req.params.id),
            dbCommentaireID = await Commentaire.find({ sujetID: req.params.id })
        console.log(dbCommentaireID);

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
        if (!req.session) {
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
    },

/************************************************************
*                        Méthdoe DELLETE(1 SUJET) 
*************************************************************/
    //*** Permet de suprimer un sujet de la basse de données ***//
    deleteOne: async (req, res) => {
        //** chercher les sujets dans la base de donnée **//
        const dbSujets = await Sujet.findById(req.params.id),
            //** pathImg permet de supprimer l'image lier au sujet supprimer **//
            PathImg = Path.resolve("public/image/" + dbSujets.name)


        //** foncttion pour supprimer un sujet **//
        Sujet.deleteOne({
            //** id est dans req.params.id **//
            _id: req.params.id
        },
            //** Gestion des erreur **//
            (err) => {
                //** si il y a pas d'erreur **/
                if (!err) {
                    //** fs.unlink permet de supprimer l'image du sujet **//
                    Fs.unlink(PathImg,
                        //** Gestion des erreurs **//
                        (err) => {
                            //** si i y a une erreur tu me la logue **//
                            if (err) {
                                console.log(err)
                            }
                            //** sinon tu me logue que le fichier et supprimer et tu me redirige sur la page admin **//
                            else {
                                console.log('fichier supprimer')
                                res.redirect('/AdminSujet')
                            }
                        })
                }
                //** si il y a une erruer tu me logue l'erreur **/
                else {
                    res.send(err)
                }
            })
    },

}
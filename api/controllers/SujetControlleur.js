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
            dbSujetsID      = await Sujets.findById(req.params.id),
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
    delete: async (req, res) => {
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
                                res.redirect('/Admin')
                            }
                        })
                }
                //** si il y a une erruer tu me logue l'erreur **/
                else {
                    res.send(err)
                }
            })
    },

/************************************************************
*                        Méthode PUT
*************************************************************/
    //*** Permet de metre a jour un sujet ***//
    put: async (req, res) => {
        const
            //** query me permer de recupere l'id d'un sujet **//
            Query = { _id: req.params.id },
            //** dbsujet permet de chercher un sujet par id **//
            dbSujets = await Sujet.findById(Query),
            //** pathImg permet de relier l'image du sujet dans la base de donnée **//
            PathImg = path.resolve("public/image/" + dbSujets.name)

        //** condition dans une condition **//
        //** Si req.file n'y est pas alors: **/
        if (!req.file) {
            //** tu met a jour le sujet **//
            if (req.body.title) {
                Sujets.updateOne(Query, {
                    title: req.body.title
                },
                    //** sinon tu me redirige soit **/
                    (err) => {
                        //** soit a l'acceuil **//
                        if (err) res.redirect('/Admin')
                        //** soit a la page admin **//
                        else res.redirect('/Admin')
                    })
            }
            //** sinon ru me redirige **//
            else {
                //** a la page home **//
                res.redirect('/Admin')
            }
        }
        //** sinon tout sa **//
        else {
            //** tu met a jour mon sujet **//
            Sujet.updateOne(query, {
                ...req.body,
                imgSujets: `/assets/image/${req.file.originalname}`,
                name: req.file.originalname,
            },
                //** si il y a des erreur **//
                (error, post) => {
                    //** fs.unlink permet de supprimer le fichier en asynchrone **//
                    Fs.unlink(PathImg,
                        (err) => {
                            //** si il y a une erreur tu me la logue **/
                            if (err) {
                                console.log(err)
                            }
                            //** sinon tu me logue que le fichier et supprimer et tu me redirige sur la page admin **//
                            else {
                                console.log('File Deleted.')
                                res.redirect('/Admin')
                            }
                        })
                })
        }
    },

}
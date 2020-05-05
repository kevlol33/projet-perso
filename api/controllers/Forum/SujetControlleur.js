/************************************************************
*              Controleur des Sujet
*************************************************************/

/************************************************************
*                       Importation 
*************************************************************/
const
      express = require('express')
    , router = express.Router()
    , Commentaire = require('../../database/Commentaire')
    , Sujet = require('../../database/Sujet')
    , Path = require('path')
    , Fs = require('fs')

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
            dbSujetsID = await Sujet.findById(req.params.id)

        console.log(dbSujetsID);
        

        /* redirige moi vers sur la page sujet avec les donnée sujets ainsi que les donnée commentaires */
        res.render('Sujet', {
            dbSujetsID
        })
    },

    getID: async (req, res) => {
        const 
            query = req.params.id
,           dbSujets = await Sujet.findById(query)
,           dbCommentaire = await Commentaire.find({sujetID: query})
,           arr = new Array(dbCommentaire)

        console.log(query);
        console.log(dbSujets);
        console.log(dbCommentaire);
        console.log(arr);
        
        
        
        res.render('sujetID', {

            dbSujets,
            dbCommentaire
            
        })
        
    },
        
    /************************************************************
    *                        Méthode PUT 
    *************************************************************/

    //*** Permet de metre a jour un sujet ***//
    put: async (req, res) => {
        const
            //** query me permer de recupere l'id d'un sujet **//
            Query = await Sujet.find({
                _id: req.params.id
            })
            //** dbsujet permet de chercher un sujet par id **//
            , dbSujets = await Sujet.findById(Query)
            //** pathImg permet de relier l'image du sujet dans la base de donnée **//
            , PathImg = Path.resolve("public/image/" + dbSujets.name)
            
        //** condition dans une condition **//
        //** Si req.file n'y est pas alors: **/
        if (!req.file) {
            console.log('pas de fichier');
            // console.log(error);
            
        }
        //** sinon tout sa **//
        else {
            console.log('je met tout a jour');

            //** tu met a jour mon sujet **//
            Sujet.findByIdAndUpdate(Query, {
                title: req.body.title
                , imgSujets: `/assets/image/${req.file.originalname}`
                , name: req.file.originalname
                , description: req.body.description
            },
                //** si il y a des erreur **//
                (error, post) => {
                    //** fs.unlink permet de supprimer le fichier en asynchrone **//
                    Fs.unlink(PathImg,
                        (err) => {
                            console.log('il y a une erreur avec l image');

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
}
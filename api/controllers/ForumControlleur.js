/************************************************************
*                       Importation 
*************************************************************/
const
    Sujets  = require('../database/Sujet'),
    Express = require('express'),
    Path    = require('path'),
    Router  = Express.Router()

/************************************************************
*                       Controleur du forum 
*************************************************************/
module.exports = {

    //*** Permet de rester sur la pasge forum avec les donnée des sujet ***//
    get: async (req, res) => {

        //** cette constance permet d'aller chercher les sujet dans la base de donnée **//
        const 
            dbType1  = await Sujets.find({ type: { $lte: 1 } })
            dbType2  = await Sujets.find({ type: { $gte: 2 } })
            dbSujets = await Sujets.find({})

        res.render('Forum', {
            dbSujets, dbType1, dbType2
        })
    },

    post: async (req, res) => {
        // condition //
        console.log(req.body);
        
        
        //** si req.file nes pas la **//
        if (!req.file) {
            //** alors tu me redirige sur la page home **//
            res.redirect('/Forum')
            console.log('Pas de fichier');
            
        } else {
            //** sinon tu me crée sa **//
            Sujets.create({
                ...req.body,
                imgSujets: `/assets/image/${req.file.originalname}`,
                name: req.file.originalname,
            },
                //** si il y a des errreur alors **/
                (error, post) => {
                    console.log(err);
                    
                    //** tu me redirige vers la page admin **//
                    res.redirect('/Home')
                })
                
        }
    },

}
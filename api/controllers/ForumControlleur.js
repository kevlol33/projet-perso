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
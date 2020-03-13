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
    //*** Permet de rester sur la pasge forum ***//
    get: async (req, res) => {
        const dbsujets = await Sujets.find({})
        res.render('Forum', {
            dbsujets
        })
    },

    post: async (req, res) => {
        if (!req.file) {
            //** alors tu me redirige sur la page home **//
            res.redirect('/Home')
        } else {
            //** sinon tu me crée sa **//
            Sujets.create({
                ...req.body,
                imgSujets: `/assets/image/${req.file.originalname}`,
                name: req.file.originalname,
            },
                //** si il y a des errreur alors **/
                (error, post) => {
                    //** tu me redirige vers la page admin **//
                    res.redirect('/Forum')
                })
                
        }
    }
}
//***** Importation *****//
const
    express = require('express'),
    router = express.Router(),
    path = require('path'),
    sujets = require('../database/sujetforum')

//***** Controleur du forum *****//
module.exports = {
    //*** Permet de rester sur la pasge admin ***//
    get: async (req, res) => {
        //** chercher les donnée a l'interieur de la base de donnée **//
        const dbsujet = await sujets.find({})
        //** je logue pour voir les article dans la base de donnée **//
        // console.log(dbsujet);
        //** je demande de rester sur la page admin **//
        res.render('admin', {
            dbsujet
        })
    },
    //*** Permet d'enregistrer un sujet dans la base de données ***//
    post: async (req, res) => {
        //** chercher les donnée a l'interieur de la base de donnée **//
        const dbsujet = await sujets.find({})
        //** creation du sujet **//
        sujets.create({
            ...req.body
        },
            //** je logue un send ok  **//
            console.log('send ok'),
            //** je demande de revenir sur la page admin **//
            res.redirect('/admin')
        )
    },
    //*** Permet de suprimer un sujet de la basse de données ***//
    deleteOne: (req, res) => {
        //** foncttion pour supprimer un sujet **//
        sujets.deleteOne({
            //** id est dans req.params.id **//
            _id: req.params.id
        },
            //** Gestion des erreur **//
            (err) => {
                //** si il n'y a pas d'erreur tu me redirige sur la page admin **//
                if (!err) {
                    res.redirect('/admin')
                }
                //** si il y a une erruer tu me logue l'erreur **/
                else {
                    res.send(err)
                }
            })
    },
    //*** permet de supprimer tout les article en un clic ***//
    deleteAll: (req, res) => {
        //** fonction pour supprimer tout en un clic **//
        sujets.deleteMany((err) => {
            //** si il n'y a pas d'erreur alors tu me redirige sur la page admin **//
            if (!err) {
                res.redirect('/admin')
            }
            //** si il y a une erreur tu me logue l'erreur **//
            else {
                res.send(err)
            }
        })
    },
    //*** permet de metre a jour le sujet du forum ***//
    put: async (req, res) => {
        //** récuperation de l'id du sujet **//
        const query = { _id: req.params.id },
            dbsujet = await sujets.findById(query)

        //** Mise a jour du sujet grace a la methode updateOne **//
        sujets.updateOne(query, {
            title: req.body.title,
            type: req.body.type,
            description: req.body.description

        },
            //** Colbaque **//
            (err) => {
                //** si il y a une erreur tu me log l'erreur **//
                if (err) console.log(err)
                //** si il n'y a pas d'erreur tu me redirige sur la page admin **//
                else res.redirect('/admin')

            }

        )
    }
}
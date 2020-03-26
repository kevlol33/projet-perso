/************************************************************
*                       Importation 
*************************************************************/

const 
    User = require('../database/User')

/************************************************************
*                       Exportation du Module 
*************************************************************/

module.exports = (req, res, next) => {

    // je logue le middleware de l'adminsitration
    console.log('middleware User Verif');

    //** si tu a req.session.UserId qui n"est pas égale a true **//
    if (req.session.isVerified !== true) {
        //** tu me redirectionne sur la page Login **//
        return res.redirect('/Forum')
    } 
    //** sinon **//
    else {
        //** Tu continue ta route **//
        next()
    }

}
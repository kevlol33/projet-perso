/************************************************************
*                       Importation 
*************************************************************/

const 
    User = require('../database/User')

/************************************************************
*                       Exportation du Module 
*************************************************************/

module.exports = (req, res, next) => {

    // je logue le middleware de l'utiisateur
    console.log('middleware auth');

    //** si tu a req.session.UserId n'est pas égale a user **//
    if (req.session.status !== 'user') {
        //** tu me redirectionne sur la page hommeconnectec **//
        return res.redirect('/Login')
    } else {
        //** Tu continue ta route **//
        next()
    }

}
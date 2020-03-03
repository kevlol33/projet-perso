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
    console.log('middleware admin');

    //** si tu a req.session.UserId **//
    if (req.session.isAdmin !== true) {
        //** tu me redirectionne sur la page hommeconnectec **//
        return res.redirect('/')
    } else {
        //** Tu continue ta route **//
        next()
    }

}
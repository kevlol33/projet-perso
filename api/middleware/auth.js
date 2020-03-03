/************************************************************
*                       Importation 
*************************************************************/

const 
    User = require('../database/User')

/************************************************************
*                       Exportation du Module 
*************************************************************/

module.exports = (req, res, next) => {

    console.log('middleware auth');

    //** si tu a req.session.UserId **//
    if (req.session.status !== 'user') {
        //** tu me redirectionne sur la page hommeconnectec **//
        return res.redirect('/')
    } else {
        //** Tu continue ta route **//
        next()
    }

}
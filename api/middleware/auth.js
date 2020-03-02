/************************************************************
*                       Importation 
*************************************************************/

const 
    User = require('../database/User')

/************************************************************
*                       Exportation du Module 
*************************************************************/

module.exports = (req, res, next) => {

    console.log('coucou');
    

    //** si tu a req.session.UserId **//
    if (req.session.UserId) {

        //** tu me redirectionne sur la page hommeconnectec **//
        return res.redirect('/')
        

    }

    //** Tu continue ta route **//
    next()
}
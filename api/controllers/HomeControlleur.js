/************************************************************
*                       Importation 
*************************************************************/
const
    Sujet = require('../database/Sujet')

/************************************************************
*                       Controleur du forum 
*************************************************************/
module.exports = {
    //*** Permet de rester sur la pasge forum ***//
    get: async (req, res) => {
        //** cela me permet de recuperer les sujet dans la base de donnée **//
        const dbSujets = await Sujet.find({})
        /* tu me redirige sur la page Home avec les données des sujets */
        res.render('Home', {
            dbSujets
        })
    },
}
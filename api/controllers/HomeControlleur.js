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
        const 
            sess = req.session
            dbSujets = await Sujet.find({})
            dbType1    = await Sujet.find({ type: { $lte: 1 } })
            dbType2    = await Sujet.find({ type: { $gte: 2 } })
        /* tu me redirige sur la page Home avec les données des sujets */
        res.render('Home', {
            dbSujets, dbType1, dbType2, sess
        })
    },
}
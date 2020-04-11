/************************************************************
*              Controleur des Liste Article
*************************************************************/

const
    Sujet  = require('../../../database/Sujet')

/************************************************************
*                       Importation 
*************************************************************/

module.exports = {

    //*** Permet de rester sur la pasge forum avec les donnée des sujet ***//
    get: async (req, res) => {

        //** cette constance permet d'aller chercher les sujet dans la base de donnée **//
        const 
            sess = req.session
            dbType1  = await Sujet.find({ type: { $lte: 1 } })
            dbType2  = await Sujet.find({ type: { $gte: 2 } })
            dbSujets = await Sujet.find({})

        res.render('Article', {
            dbSujets, dbType1, dbType2, sess
        })
    }
}
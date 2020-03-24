/************************************************************
*                       Importation 
*************************************************************/
const
    Sujet  = require('../database/Sujet')

/************************************************************
*                       Controleur du forum 
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

        res.render('Forum', {
            dbSujets, dbType1, dbType2, sess
        })
    },

    post: async (req, res) => {
        // condition //
        //** si req.file nes pas la **//
        if (!req.file) {
            console.log('pas content');
            
            //** alors tu me redirige sur la page home **//
            res.redirect('/Forum')
        } else {
            console.log('content');
            
            //** sinon tu me crée sa **//
            Sujet.create({
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
    },

}
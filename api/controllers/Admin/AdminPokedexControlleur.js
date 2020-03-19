/************************************************************
*                       Importation 
*************************************************************/
const
    Poke   = require('../../database/Pokemon')
    Path   = require('path'),
    Fs     = require('fs')


/************************************************************
*                        Méthode post (crée pokémon) 
*************************************************************/

module.exports = {

/************************************************************
*             Méthode Get pour récupere les données 
*************************************************************/
    get: async (req, res) => {
        /* cela me permet de chercher dans la base de donnée  */
        const dbPoke   = await Poke.find({})
        /* cela me permet d'afficher la page adminpokedex avec les donner des pokemon */
        res.render('AdminPokedex', 
        dbPoke
        )
    },

/************************************************************
*vMéthode Post permet d'envoyer des donnée dans la base de donnée 
*************************************************************/
    post: async (req, res) => {
        /* Si il n'y a pas req.file  */
        if (!req.file) {
            /* tu me redirige sur la page adminpokedex */
            res.redirect('/AdminPokedex')
        } 
        /* sinon */
        else {
            /* tu me crée le pokemon */
            Poke.create({
                ...req.body,
                imgPoke: `/assets/image/Pokemon/${req.file.originalname}`,
                name: req.file.originalname,
            })
        }
    }
}

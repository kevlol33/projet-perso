/************************************************************
*                       Importation 
*************************************************************/
const
    poke   = require('../../database/Pokemon')
    path   = require('path'),
    fs     = require('fs')


/************************************************************
*                        Méthode post (crée pokémon) 
*************************************************************/

module.exports = {

/************************************************************
*             Méthode Get pour récupere les données 
*************************************************************/
    get: async (req, res) => {
        /* cela me permet de chercher dans la base de donnée  */
        const dbpoke   = await poke.find({})
        /* cela me permet d'afficher la page adminpokedex avec les donner des pokemon */
        res.render('AdminPokedex', 
        dbpoke
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
            poke.create({
                ...req.body,
                imgPoke: `/assets/image/Pokemon/${req.file.originalname}`,
                name: req.file.originalname,
            })
        }
    }
}

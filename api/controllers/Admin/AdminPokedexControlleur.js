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

    get: async (req, res) => {
        const dbpoke   = await poke.find({})
        res.render('AdminPokedex', 
        dbpoke
        )
    },

    post: async (req, res) => {
        if (req.file) {
            res.redirect('/Admin')
        } else {
            poke.create({
                ...req.body,
                imgPoke: `/assets/image/Pokemon/${req.file.originalname}`,
                name: req.file.originalname,
            })
        }
    }
}

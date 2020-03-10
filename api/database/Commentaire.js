/************************************************************
*              Model pour les commentaire du Sujet
*************************************************************/
/************************************************************
*                       Mongoose 
*************************************************************/
const 
    mongoose = require('mongoose')

/************************************************************
*                       Model du Shema
*************************************************************/
const 
    CommentaireSchema = new mongoose.Schema({
        //** Variable du schema **//
        description: String,
        username: String,

    })

/************************************************************
*                       Exporte du Shema
*************************************************************/
    module.exports = mongoose.model('Commentaire',CommentaireSchema)
/************************************************************
*              Model pour les commentaire du Sujet
*************************************************************/

/************************************************************
*                       Mongoose 
*************************************************************/
const 
    Mongoose = require('mongoose')

/************************************************************
*                       Model du Shema
*************************************************************/
const 
    /* Création du schema Com */
    ComSchema = new Mongoose.Schema({
        /* les description sera de type String */
        description: String,
        /* les username sera de type String */ 
        username: String,

        sujetID: String

    })

/************************************************************
*                       Exporte du Shema
*************************************************************/

    module.exports = Mongoose.model('Commentaire',ComSchema)
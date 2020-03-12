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
    /* Création du schema Com */
    ComSchema = new mongoose.Schema({
        /* les description sera de type String */
        description: String,
        /* les username sera de type String */ 
        username: String,

    })

/************************************************************
*                       Exporte du Shema
*************************************************************/
    module.exports = mongoose.model('Com',ComSchema)
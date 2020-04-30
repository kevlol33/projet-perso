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
       author:  String
    ,  message: String
    ,  date:    String
    ,  SujetID: String
    })

/************************************************************
*                       Exporte du Shema
*************************************************************/

    module.exports = Mongoose.model('Commentaire',ComSchema)
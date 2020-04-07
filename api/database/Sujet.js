/************************************************************
*              Model pour les Sujets
*************************************************************/

/************************************************************
*                       Importation de mongoose
*************************************************************/
const 
    Mongoose = require('mongoose')

/************************************************************
*                       Model
*************************************************************/
const 
    SujetsSchema = new Mongoose.Schema({
        //** Variable du schema de type string **//
        
        title: String,

        type: String,
        
        description: String,

        imgSujets: String,

        name: String
    })

/************************************************************
*                        Exportation du Module 
*************************************************************/

module.exports = Mongoose.model('Sujets',SujetsSchema )

/************************************************************
*                       Importation de mongoose
*************************************************************/
const 
    mongoose = require('mongoose')

/************************************************************
*                       Model
*************************************************************/
const 
    SujetsSchema = new mongoose.Schema({
        //** Variable du schema de type string **//
        title: String,
        type: String,
        description: String,
        imgSujets: String,
        name: String
    })

//*** Exportation du shéma de sujet de forum ***//
module.exports = mongoose.model('Sujets',SujetsSchema )
//***** Model pour les sujet du forum ******//

//*** Import de Mongoose (qui permet de crée un Shéma) ***//
const 
    mongoose = require('mongoose')

//*** Model du chema de sujet du forum ***/
const 
    SujetsSchema = new mongoose.Schema({
        //** Variable du schema **//
        title: String,
        type: String,
        description: String,
        imgSujets: String,
        name: String
    })

//*** Exportation du shéma de sujet de forum ***//
module.exports = mongoose.model('Sujets',SujetsSchema )
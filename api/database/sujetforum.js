//***** Model pour les sujet du forum ******//

//*** Import de Mongoose (qui permet de crée un Shéma) ***//
const 
    mongoose = require('mongoose')

//*** Model du chema de sujet du forum ***/
const 
    SujetSchema = new mongoose.Schema({
        //** Variable du schema **//
        title: String,
        type: String,
        description: String
    })

//*** Exportation du shéma de sujet de forum ***//
module.exports = mongoose.model('sujet',SujetSchema )
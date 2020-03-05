/************************************************************
*                       Importation 
*************************************************************/
const 
    mongoose = require('mongoose')

/************************************************************
*                       Model
*************************************************************/

    const 
        PokeSchema = new mongoose.Schema({
        //** Variable du schema **//
        name: String,
        type: String,
        description: String,
        imgPoke: String,
        StatAtk: String,
        StatDEF: String,
        StatSpé: String
    })

/************************************************************
*            Exportation du shéma de sujet de forum 
*************************************************************/
module.exports = mongoose.model('Poke',PokeSchema )

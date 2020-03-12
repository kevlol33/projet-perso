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
        name:        String,
        type:        String,
        description: String,
        imgPoke:     String,
        StatPV:      String,
        StatATK:     String,
        StatDEF:     String,
        StatATKSPE:  String,
        StatDEFSPE:  String,
        StatVIT:     String,
        StatSPE:     String
    })

/************************************************************
*            Exportation du shéma de sujet de forum 
*************************************************************/
module.exports = mongoose.model('Poke',PokeSchema )

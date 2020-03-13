/************************************************************
*                       Importation 
*************************************************************/
const 
    mongoose = require('mongoose')

/************************************************************
*                       Model
*************************************************************/

    const 
        /* Création du Shema Poke */
        PokeSchema = new mongoose.Schema({
        /* les variable seront de type string */
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

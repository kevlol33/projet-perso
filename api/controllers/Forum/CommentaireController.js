/************************************************************
*              Controleur des Commentaires
*************************************************************/

/************************************************************
*                       Importation 
*************************************************************/
const 
    express = require('express')
,   router = express.Router()
,   path = require('path')
,   Commentaire = require('../../database/Commentaire')

/************************************************************
*                       Controleur Commentaire
*************************************************************/
module.exports = {

    /************************************************************
    *                        Méthode POST
    *************************************************************/
   post: async (req,res) => {
       console.log(req.body);
       Commentaire.create({
        ...req.body,
        date: Date.now()
    },
    res.redirect('/Forum'))
   }
}
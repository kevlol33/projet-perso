/************************************************************
*                       Importation 
*************************************************************/
const

User   = require('../database/User')

/************************************************************
*                       Controleur Success 
*************************************************************/

module.exports = {

/************************************************************
*                        Méthode GET 
*************************************************************/

    get: async (req, res) => {
        const 
            dbUser = await User.find({})
            sess = req.session

        console.log(sess);
        
        res.render('Sussess', {
            dbUser, sess
        })
    }
}
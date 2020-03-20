/************************************************************
*                        Importation du model User
*************************************************************/
const 
    User = require('../database/User')

/************************************************************
*                        Controleur Page Home
*************************************************************/
module.exports = {
    
/************************************************************
*                        METHODE GET 
*************************************************************/
    //*** Permet de rester sur la pasge home ***//
    get: async (req, res) => {

    const
        sess = req.session,
        dbUsersId = await User.findById(sess.userId)

        res.render('MonCompte', {
            dbUsersId
        })

    },

}
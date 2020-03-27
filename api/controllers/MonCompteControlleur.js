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
        dbUsers    = await User.findById(req.session.userId)
        sess = req.session

        res.render('MonCompte', {
            dbUsers, sess
        })

    },

    delUser: (req, res) => {
        console.log('je suis pret');

        User.remove({ _id: req.params.id }, (err) => {
            if (!err) {
                res.redirect('/')
            } else {
                res.send(console.log(err))
            }
        })
    },
}
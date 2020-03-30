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
        console.log('je suis pret a supprimer');

        User.remove({ _id: req.params.id }, (err) => {
            if (!err) {
                res.redirect('/')
            } else {
                res.send(console.log(err))
            }
        })
    },

    updateStatus: async (req, res) => {
        const query = await User.find({

            _id: req.params.id
        })
            console.log('content');
            
        User.findByIdAndUpdate(query, {
            username: req.body.username
        ,   email: req.body.email
        },
            (err, post) => {
                console.log('update reussie');

                res.redirect('/MonCompte')
            })
    }
}
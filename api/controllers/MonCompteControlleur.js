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
        sess    = req.session
        dbUsers   = await User.findById(req.params.id)

        res.render('MonCompte', {
            sess, dbUsers
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
        const
            //** query me permer de recupere l'id d'un sujet **//
            Query = await User.find({
                _id: req.params.id
            })
            //** dbsujet permet de chercher un sujet par id **//
            , dbUsers = await User.findById(Query)
            


            console.log('je met tout a jour');

            //** tu met a jour mon sujet **//
            User.findByIdAndUpdate(Query, {
               username: req.body.username
            ,  email: req.body.email 
            })
        }
    }
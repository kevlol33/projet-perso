/************************************************************
*              Controleur des Utilisateur
*************************************************************/

/************************************************************
*                       Importation 
*************************************************************/
const
    User = require('../database/User')
    , Bcrypt = require('bcrypt')

/************************************************************
*                       Controleur User
*************************************************************/
module.exports = {

    /************************************************************
    *                       Methode Get 
    *************************************************************/

    get: (req, res) => {
        res.render('User')
    },

    /************************************************************
    *                       Methode post 
    *************************************************************/
    post: (req, res) => {
        const { email, password } = req.body;

        //** je vais chercher un utilisateur dans ma base de donnée **//
        User.findOne({

            //** Je cherche l'adress mail de l'utilisateur **//
            email
        },

            //** Si il y a des erreur alors : **//
            (error, user) => {

                //** si tu est utilisateur **//
                if (user) {

                    //** tu va comparer dans la base de donnée **//
                    Bcrypt.compare(password, user.password, (error, same) => {

                        //** les information suivante sont identique **//
                        if (same) {

                            //** le statuts de l'utilisateur **//
                            req.session.status = user.status
                            console.log('Il est un' + ' ' + user.status);


                            //** l'username de l'utilisateur **//
                            req.session.username = user.username
                            console.log('Il est un' + ' ' + user.username);


                            //** l'email de l'utilisateur **//
                            req.session.email = user.email
                            console.log('Le mail est ok');


                            //** l'user de l'utilisateur **//
                            req.session.userId = user._id
                            console.log('Le password est ok');


                            //** si l'utilisateur et Administrateur **/
                            req.session.isAdmin = user.isAdmin
                            console.log('Je suis Un Administrateur ' + user.isAdmin);


                            //** si l'utilisateur est Bannie **//
                            req.session.isBan = user.isBan
                            console.log('Je suis Bannis ' + user.isBan);

                            //** Apres sela et ok tu me redirigide sur la page home connect **//
                            res.redirect('/Home')
                            console.log('Je suis Bannie ' + user.isBan);


                            // console.log(user._id);
                        }
                        //** si cela n'est pas ok tu me redirige sur la page acceuil **/
                        else {
                            console.log('pas content');

                            res.redirect('/Home')
                        }
                    })
                }
                //** si le visiteur n'est pas utiisateur alors il est redirigé sur la page acceuil **//
                else {
                    console.log('pas content 2');

                    return res.redirect('/Home')
                }
            })
    },

    put: async (req, res) => {
        const
            //** query me permer de recupere l'id d'un sujet **//
            Query = await User.find({
                _id: req.params.id
            })
            //** dbsujet permet de chercher un sujet par id **//
            , dbUser = await User.findById(Query)
            
        //** condition dans une condition **//
        //** Si req.file n'y est pas alors: **/
        if (!req.body.username) {
            console.log('pas de username');
            console.log(err);
            
        }
        //** sinon tout sa **//
        else {
            console.log('je met tout a jour');

            //** tu met a jour mon sujet **//
            User.findByIdAndUpdate(Query, {
                username: req.body.username
            ,   email: req.body.email
            })
    }
},
    /************************************************************
    *                        Méthode DELUSER
    *************************************************************/

    dellUser: (req, res) => {
        console.log('coucou');

        User.remove({ _id: req.params.id }, (err) => {
            if (!err) {
                res.redirect('/Admin')
            } else {
                res.send(console.log(err))
            }
        })
    },

    /************************************************************
    *                       Methode logout
    *************************************************************/
    logout: (req, res) => {
        /* tu me detruit la session grace */
        req.session.destroy(() => {
            /* tu detruit le cookie et tu me redirige sur la page login */
            res.clearCookie("ptitBiscuit");
            res.redirect('/')
        })
    }
}
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

        res.render('Login')

    },

/************************************************************
*                        METHODE POST 
*************************************************************/
    //** Post permet de crée un utilisateur **//
    post: (req, res) => {
        const body = req.body

        console.log(body)
    
        if (body.password !== body.password2) {
            res.redirect('/404')
        } else if (body.password === body.password2) {
            //    ** Je crée l'utilisateur **/
            User.create({

                //** création de l'username **/
                username: req.body.username,
                
                //** informer son adress mail **//
                email: req.body.email,

                //** création du password **//
                password: req.body.password,

                //** le statue de la personne sera un utilisateur **//
                status: 'user',

                isAdmin: false,

                isBan: false

            }, 
                res.redirect('/Home'),
            
            //** Gestion des erreure **//
            (error, user) => {

                //** resdircetion sur la page acceuil **//
                res.redirect('/404')

            })
        }
    
    },
}
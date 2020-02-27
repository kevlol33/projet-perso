/************************************************************
*                        Importation 
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

        res.render('home')

    },

/************************************************************
*                        METHODE POST 
*************************************************************/
    //** Post permet de crée un utilisateur **//
    post: (req, res) => {

       //** Je crée l'utilisateur **/
       User.create({

        //** création de l'username **/
        username: req.body.username,
        
        //** informer son adress mail **//
        email: req.body.email,

        //** création du password **//
        password: req.body.password,

        //** confirmation du password **//
        password2: req.body.password2,

        //** le statue de la personne sera un utilisateur **//
        status: 'user',

        isAdmin: false,

        isBan: false

       }, 
       
       //** Gestion des erreure **//
       (error, user) => {

        //** resdircetion sur la page acceuil **//
           res.redirect('/')

       })
    
    },
}
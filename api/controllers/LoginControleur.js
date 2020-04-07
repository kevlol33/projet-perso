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
        const Body = req.body

        // console.log(body)
    
        if (Body.password !== Body.password2) {
            console.log('pas content');
            
            res.redirect('/')
        } else if (Body.password === Body.password2) {
            console.log('content');
            
            //    ** Je crée l'utilisateur **/
            User.create({  
                
                //** création de l'username **/
                username: req.body.username,
                
                //** informer son adress mail **//
                email: req.body.email,

                //** création du password **//
                password: req.body.password,

                //** création du password **//
                sexe: req.body.sexe,

                //** le statue de la personne sera un utilisateur **//
                status: 'user',

                isAdmin: false,

                isBan: false,

            }, 
            
            //** Gestion des erreure **//
            (err) => {
                console.log(err);
                
                //** resdircetion sur la page acceuil **//
                 res.redirect('/')

            }
            )
        }
    
    },
}
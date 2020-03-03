/************************************************************
*                       Importation 
*************************************************************/
const 
    User = require('../database/User'),
    bcrypt = require('bcrypt')

/************************************************************
*                       Controleur User
*************************************************************/
module.exports = {

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
        (error,  user) => {

            //** si tu est utilisateur **//
            if (user) {

                //** tu va comparer dans la base de donnée **//
                bcrypt.compare(password, user.password, (error, same) => {
                
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
                        
    
                        //** le password de l'utilisateur **//
                        req.session.password = user.password
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
                        
                        res.redirect('/')
                    }
                })
            } 
            //** si le visiteur n'est pas utiisateur alors il est redirigé sur la page acceuil **//
            else {
                console.log('pas content 2');
                
               return res.redirect('/')
            }
        })
    },

    logout: (req, res) => {
        req.session.destroy(() => {
            res.clearCookie("ptitBiscuit");
            res.redirect('/')
        })
    }
}
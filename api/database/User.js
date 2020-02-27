/************************************************************
*                        Importation 
*************************************************************/
const 
    mongoose = require ('mongoose')
    bcrypt = require('bcrypt')

/************************************************************
*                        Schema
*************************************************************/
const UserShema = new mongoose.Schema({

    //** Je deffinie le statu de futur utilisateur et savoir a quoi il corespondra sur la base de donnée **//
    status: {

        //* le type sera une chaine de caractère *//
        type: String,
        //* Par defaut l'utilisateur sera considérer comme un utilisateur sur le site internet *//
        default: 'user'
    },

    username: {

        //* le type sera une chaine de caractère *//
        type: String
    },

    email: {

        //* le type sera une chaine de caractère *//
        type: String,
        //* l'adresse mail ne poura etre utiliser qu'une fois *//
        unique: true
    },

    password:{

        //* le type sera une chaine de caractère *//
        type: String
    },

    password2: {

        //* le type sera une chaine de caractère *//
        type: String
    },

    isAdmin: {

        //* boolea permet de savoir si c'est oui ou non à une condition *//
        type: Boolean,
        //* Par defaut l'utilisateur ne sera pas administrateur du site *//
        default: false
    },

    isBan: {

        //* boolea permet de savoir si c'est oui ou non à une condition *//
        type: Boolean,
        //* Par defaut l'utilisateur ne sera pas bani du site *//
        default: false
    },
})

/************************************************************
*                         Bcrypt
*************************************************************/

// const 
//     User = this

// bcrypt.hach(User.password, 10, (error, encrypted)) => {
//     user.password = encrypted
//     next()
// }

/************************************************************
*                        Exportation du Module 
*************************************************************/
module.exports = mongoose.model('User', UserShema)
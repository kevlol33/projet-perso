/************************************************************
*              Model pour les User
*************************************************************/

/************************************************************
*                        Importation 
*************************************************************/
const
    Mongoose = require('mongoose')
    Bcrypt = require('bcrypt')

/************************************************************
*                        Schema
*************************************************************/

const UserShema = new Mongoose.Schema({

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

    password: {

        //* le type sera une chaine de caractère *//
        type: String
    },

    password2: {

        //* le type sera une chaine de caractère *//
        type: String
    },

    sexe: {
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

    isVerified: {
        //* boolea permet de savoir si c'est oui ou non à une condition *//
        type: Boolean,
        //* Par defaut l'utilisateur ne sera pas bani du site *//
        default: false
    }
})

/************************************************************
*                         Bcrypt
*************************************************************/

UserShema.pre('save', function (next) {

    //** utilise le passeword de l'utilisateur **//
    const user = this                                      

    //** avec le passeword hache le et crypte le**//
    Bcrypt.hash(user.password, 10, (error, encrypted) => {  
        user.password = encrypted
        //** passe a la suite **//
        next()                                                
    })
})

UserShema.pre('save', function (next) {

    //** utilise le passeword2 de l'utilisateur **//
    const user = this                                      

    //** avec le passeword2 hache le et crypte le**//
    Bcrypt.hash(user.password2, 10, (error, encrypted) => {  
        user.password2 = encrypted
        //** passe a la suite **//
        next()                                                
    })
})


/************************************************************
*                        Exportation du Module 
*************************************************************/

module.exports = Mongoose.model('User', UserShema)
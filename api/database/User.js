const 
    mongoos = require ('mongoose')

const UserSckema = new mongoose.Schema({
    Username: {type: String},
    email: {type: String},
    password:{type: String},
    password2: {type: String},
    sexe: {type: String},
    avatar: {type: String}
})

module.exports = mongoose.model('User', UserShema)
//**** Import de mon model User ****//
const User = require('../database/User')

//**** Exportation des modules avec les méthode Post, Put, Delete, Get ****//
module.exports = {
    post: (req, res) => {
        const { email, password, password2} = req.body;
    }
}
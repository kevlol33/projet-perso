//***** Contoleur de la page acceuil *****//
module.exports = {
    //*** Permet de rester sur la pasge home ***//
    get: (req, res) => {
        res.render('home')
    },
}
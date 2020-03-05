

/************************************************************
*                       Controleur du forum 
*************************************************************/
module.exports = {
    //*** Permet de rester sur la pasge Home ***//
    get: (req, res) => {
        res.render('Home')
    },
}
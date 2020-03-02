

/************************************************************
*                       Controleur du forum 
*************************************************************/
module.exports = {
    //*** Permet de rester sur la pasge forum ***//
    get: (req, res) => {
        res.render('homeconnected')
    },
}
/************************************************************
*                       Importation 
*************************************************************/
const
    User = require('../../database/User')

/************************************************************
*                       Controleur Admin User
*************************************************************/
    module.exports = {

    /************************************************************
    *                        Méthode Post 
    *************************************************************/
        BanUser: (req, res) => {
            const
                id = { _id: req.session.userId }
        
            User.findByIdAndUpdate(
                id,
                {
                    isBan: true
                },
                
                { useFindAndModify: false},
        
                function (error, post) {
                    if (error) {
                        console.log('err 2');
                        res.redirect('/')
                    } else {
                        User.findByIdAndUpdate({
                            isBan: true
                        })
                        res.render('Admin')
                    }
                })
        }
    }

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
            sess = req.session 
    
            let query = { _id:req.params.id }

            console.log(sess);
            console.log(query);
            
            User.findByIdAndUpdate(
                query,
                {
                    isBan: true
                },
                
                { useFindAndModify: false},
    
                function (error, post) {
                    if (error) {
                        console.log('err 2');
                        res.redirect('/')
                    } else {
                        res.render('Admin')
                    }
                })
        }
    }

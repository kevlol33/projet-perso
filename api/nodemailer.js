/************************************************************
*                       Importation 
*************************************************************/
const 
    Express     = require('express')
,   Nodemailer  = require('nodemailer')
,   Router      = Express.Router()
,   User        = require('./database/User')
,   Transporter = Nodemailer.createTransport({
        host: "smtp.gmail.com"
    ,   service: "gmail"
    ,   port: "587"
    ,   auth: {
            user: "pokelandedev@gmail.com",
            pass: "pokelande2020"
        }
    })

/************************************************************
*                       Let 
*************************************************************/
   
    let rand, mailOptions, host, link;

/************************************************************
*                       Test Adress Mail 
*************************************************************/

Router.get('/test', (req, res, next) => {
    const MailOptions = {
        from: "pokelandedev@gmail.com"
    ,   to: req.session.email
    ,   subjet: "Félicitation"
    ,   html: "<h2>Vous avez bien tester votre mail</h2> <p>Merci à vous <3</p>"
    }
    Transporter.sendMail(MailOptions, function (err, info) {
        if (err)
            console.log(err);
        else 
            console.log(info);       
    });
    res.redirect('back');
})

/************************************************************
*                       Vérification de son Mail 
*************************************************************/
// Vérifier son Adresse Mail
Router.get('/verifMail', function (req, res) {
    const 
        Rand        = Math.floor((Math.random() *100) +54)
    ,   Host        = 'localhost:3000'
    ,   Link        = "http://" + Host + "/mailer/verify/" + rand
    ,   MailOptions = {
        to: req.session.email,
        subject: "Veuillez confirmer votre adresse Mail",
        html: "Bonjour,<br> Cliquez sur le lien pour vérifiez votre adresse mail.<br><a href=" + Link + ">Cliquez ici pour vérifier</a>",
        rand: Rand
    }
    console.log(MailOptions);
    Transporter.sendMail(MailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("Erreur")            
        } else {
            console.log("Message sent: " + res.message);
            res.render('MailSendOk')            
        }
    })
    
})

/************************************************************
*                       Certification du compte 
*************************************************************/

Router.get('/verify/:id', function (req, res) {
    const 
        sess = req.session

    res.render('VerifAcount')
})

/************************************************************
*                       Formulaire de Certification 
*************************************************************/

Router.post('/cert/:id', async (req, res) => {
    const 
        sess = req.session 
    ,   dbUser = await User.find({email: sess.email})

    let query = { _id: req.session.userId }
        console.log(sess);
        console.log(query);
        
        User.findOneAndUpdate(
            query,
            {
                isVerified: true
            },
            
            { useFindAndModify: false},

            function (error, post) {
                if (error) {
                    console.log('err 2');
                    res.redirect('/')
                } else {
                    User.findOneAndUpdate({
                        isVerified: true
                    })
                    res.render('MonCompte')
                }
            })
})

/************************************************************
*                       Exportation 
*************************************************************/
module.exports = Router

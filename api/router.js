/************************************************************
*                   Importation
************************************************************/
const
    Express = require('express')
,   Router  = Express.Router()
    
/************************************************************
*           Controllers du dossier API/CONTROLLERS
*************************************************************/

const
    Admin   = require('./controllers/AdminControlleur')
,   Compte  = require('./controllers/MonCompteControlleur')
,   Forum   = require('./controllers/ForumControlleur')
,   Home    = require('./controllers/HomeControlleur')
,   Login   = require('./controllers/LoginControleur')
,   Success = require('./controllers/Success')
,   Sujet   = require('./controllers/SujetControlleur')
,   User    = require('./controllers/UserControlleur')

/************************************************************
*                       Impotation middlewares 
*************************************************************/

const
    Auth    = require('./middleware/Auth')
,   Ban     = require('./middleware/Ban') 
,   MAdmin  = require('./middleware/Admin')
,   Upload  = require('./middleware/multer-config')
,   Verif   = require('./middleware/Verif')

/************************************************************
*            ********** CRUD ********** 
*  (Méthode Post: qui permet l'envois de données),
*  (Métode Get: qui permet de récupéré nos informations),
*  (Méthode Put: qui permet de metre a jour nos informations), 
*  (Méthode Délete: permet de supprimer nos informations).
*************************************************************/

/************************************************************
*                   Page Home Not Login
*************************************************************/

Router.route('/')
    .get(Login.get)


/************************************************************
*                   USER
*************************************************************/

Router.route('/register')
    .post(Login.post)

Router.route('/login')
    .post(User.post)

Router.route('/logout')
    .get(User.logout)

/************************************************************
*                   Page Home Login
*************************************************************/

Router.route('/Home')
    .get(Auth, Home.get)

/************************************************************
*                   Page Forum
*************************************************************/

Router.route('/Forum')
    .get  (Auth, Ban, Forum.get)
    .post (Auth, Ban, Upload.single('imgSujets'), Forum.post)

/************************************************************
*                   Page Forum ID
*************************************************************/

Router.route('/Sujet/:id')
    .get    (Auth, Ban, Sujet.get)
    .post   (Auth, Ban, Verif, Sujet.post)
    .delete (Auth, Ban, Sujet.delete)
    .put    (Auth, Ban, Upload.single('imgSujets'), Sujet.put)

/************************************************************
*                   Page MonCompte
*************************************************************/

Router.route('/MonCompte')
    .get(Compte.get)
    .delete (Compte.delUser)
    .post(Compte.updateStatus)
    .delete (User.dellUser)

/************************************************************
*                   Page Sucess
*************************************************************/

Router.route('/Success')
    .get(Auth, Success.get)

/************************************************************
*                   Page Admin (CRUD)
*************************************************************/

Router.route('/Admin')
    .get    (Auth, Ban, MAdmin, Admin.get)
    .post   (Auth, Ban, MAdmin, Upload.single('imgSujets'), Admin.post)
    .delete (Auth, Ban, MAdmin, Admin.deleteAll)

Router.route('/admin/User/:id')
    .post(Auth, Ban, MAdmin, Admin.dellUser)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = Router;
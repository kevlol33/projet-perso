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
    .get  (Auth, Forum.get)
    .post (Auth, Upload.single('imgSujets'), Forum.post)

/************************************************************
*                   Page Forum ID
*************************************************************/

Router.route('/Sujet/:id')
    .get    (Auth, Sujet.get)
    .post   (Auth, Verif, Sujet.post)
    .delete (Auth, Sujet.delete)
    .put    (Auth, Upload.single('imgSujets'), Sujet.put)

/************************************************************
*                   Page MonCompte
*************************************************************/

Router.route('/MonCompte')
    .get(Auth, Compte.get)

/************************************************************
*                   Page MonCompte
*************************************************************/

Router.route('/Success')
    .get(Auth, Success.get)

/************************************************************
*                   Page Admin (CRUD)
*************************************************************/

Router.route('/Admin')
    .get    (Auth, MAdmin, Admin.get)
    .post   (Auth, MAdmin, Upload.single('imgSujets'), Admin.post)
    .delete (Auth, MAdmin, Admin.deleteAll)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = Router;
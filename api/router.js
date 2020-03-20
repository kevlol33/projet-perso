/************************************************************
*                   Importation
************************************************************/
const
    express = require('express'),
    Router  = express.Router(),
    Upload  = require('./middleware/multer-config')

/************************************************************
*           Controllers du dossier API/CONTROLLERS
*************************************************************/

const
    AdminSujet   = require('./controllers/Admin/AdminSujetControlleur'),
    AdminPokedex = require('./controllers/Admin/AdminPokedexControlleur'),
    Forum        = require('./controllers/ForumControlleur'),
    Home         = require('./controllers/HomeControlleur'),
    Login        = require('./controllers/LoginControleur'),
    MCompte      = require('./controllers/MonCompteControlleur'),
    Pokedex      = require('./controllers/PokedexControlleur'),
    Pokemon      = require('./controllers/PokemonControlleur'),
    Sujet        = require('./controllers/SujetControlleur'),
    User         = require('./controllers/UserControlleur')

/************************************************************
*                       Impotation middlewares 
*************************************************************/

const
    Auth  = require('./middleware/Auth'),
    admin = require('./middleware/Admin')

/************************************************************
*            ********** CRUD ********** 
*  (Méthode Post: qui permet l'envois de données),
*  (Métode Get: qui permet de récupéré nos informations),
*  (Méthode Put: qui permet de metre a jour nos informations), 
*  (Méthode Délete: permet de supprimer nos informations).
*************************************************************/

/************************************************************
*                   Page home
*************************************************************/

Router.route('/')
    .get(Login.get)


/************************************************************
*                   CRUD USER
*************************************************************/

Router.route('/register')
    .post(Login.post)

Router.route('/login')
    .post(User.post)

Router.route('/logout')
    .get(User.logout)

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
    .get    (Sujet.get)
    .post   (Sujet.post)
    .delete (Sujet.deleteOne)

/************************************************************
*                   Page MonCompte
*************************************************************/

Router.route('/MonCompte')
    .get(MCompte.get)

/************************************************************
*                   Page Pokedex
*************************************************************/

Router.route('/Pokedex')
    .get(Auth, Pokedex.get)
/************************************************************
*                   Page AdminSujet
*************************************************************/

Router.route('/AdminSujet')
    .get    (admin, AdminSujet.get)
    .post   (admin, Upload.single('imgSujets'), AdminSujet.post)
    .delete (admin, AdminSujet.deleteAll)
    .put    (admin, AdminSujet.put)

/************************************************************
*                  Page AdminPokedex
*************************************************************/

Router.route('/AdminPokedex')
    .get(admin, AdminPokedex.get)
    .post(admin, Upload.single('imgPoke'), AdminPokedex.post)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = Router;
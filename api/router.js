/************************************************************
*                   Importation
*************************************************************/
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
    Regle        = require('./controllers/RegleControlleur'),
    Sujet        = require('./controllers/SujetControlleur'),
    User         = require('./controllers/UserControlleur')

/************************************************************
*                       Impotation middlewares 
*************************************************************/

const
    Auth  = require('./middleware/Auth'),
    admin = require('./middleware/Admin')

/************************************************************
*                    ** CRUD ** 
*  (Méthode Post: qui permet l'envois de données),
*  (Métode Get: qui permet de récupéré nos informations),
*  (Méthode Put: qui permet de metre a jour nos informations), 
*  (Méthode Délete: permet de supprimer nos informations).
*************************************************************/

/************************************************************
*                   CRUD page home
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
*                   CRUD Page régle
*************************************************************/

// Router.route(('/Regle'))
//     .get(Auth, Regle.get)


/************************************************************
*                   CRUD page Forum
*************************************************************/

Router.route('/Forum')
    .get(Auth, Forum.get)
    .post(Auth, Upload.single('imgSujets'), Forum.post)

/************************************************************
*                   CRUD page Forum ID
*************************************************************/

Router.route('/Sujet/:id')
    .get(Sujet.get)
    .post(Sujet.post)

/************************************************************
*                   CRUD page MonCompte
*************************************************************/

Router.route('/MonCompte')
    .get(MCompte.get)

/************************************************************
*                   CRUD page Pokedex
*************************************************************/

Router.route('/Pokedex')
    .get(Auth, Pokedex.get)
/************************************************************
*                   CRUD page AdminSujet
*************************************************************/

Router.route('/AdminSujet')
    .get(admin, AdminSujet.get)
    .post(admin, Upload.single('imgSujets'), AdminSujet.post)
    .delete(admin, AdminSujet.deleteAll)

/************************************************************
*                   CRUD page AdminPokedex
*************************************************************/

Router.route('/AdminPokedex')
    .get(admin, AdminPokedex.get)
    .post(admin, Upload.single('imgPoke'), AdminPokedex.post)

/************************************************************
*                   CRUD Admin ID
*************************************************************/

Router.route('/Admin/:id')
    .put(admin, Upload.single('imgSujets'), AdminSujet.put)
    .delete(admin, AdminSujet.deleteOne)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = Router;
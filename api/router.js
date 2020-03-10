/************************************************************
*                   Importation
*************************************************************/
const
    express = require('express'),
    router = express.Router(),
    upload = require('./middleware/multer-config')

/************************************************************
*           Controllers du dossier API/CONTROLLERS
*************************************************************/

const
    Forum   = require('./controllers/ForumControlleur'),
    Home    = require('./controllers/HomeControlleur'),
    Login   = require('./controllers/LoginControleur'),
    Pokedex = require('./controllers/PokedexControlleur'),
    Pokemon = require('./controllers/PokemonControlleur'),
    Sujet   = require('./controllers/SujetControlleur'),
    Admin   = require('./controllers/AdminControlleur'),
    User    = require('./controllers/UserControlleur')

/************************************************************
*                       Impotation middlewares 
*************************************************************/

const
    Auth = require('./middleware/Auth')
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

router.route('/')
    .get(Login.get)


/************************************************************
*                   CRUD USER
*************************************************************/

router.route('/register')
    .post(Login.post)

router.route('/login')
    .post(User.post)

router.route('/logout')
    .get(User.logout)

router.route('/Home')
    .get(Auth, Home.get)

/************************************************************
*                   GRUD page Forum
*************************************************************/

router.route('/Forum')
    .get(Auth, Forum.get)

/************************************************************
*                   GRUD page Forum ID
*************************************************************/

router.route('/Sujet/:id')
    .get(Sujet.get)
    .post(Sujet.post)

/************************************************************
*                   GRUD page Pokedex
*************************************************************/

router.route('/Pokedex')
    .get(Auth, Pokedex.get)
/************************************************************
*                   CRUD page Admin 
*************************************************************/

router.route('/Admin')
    .get(admin, Admin.get)
    .post(admin, upload.single('imgSujets'), Admin.post)
    .delete(admin, Admin.deleteAll)
    .get(Admin.get)
    .post(upload.single('imgSujets'), Admin.post)
    .delete(Admin.deleteAll)

/************************************************************
*                   CRUD Admin ID
*************************************************************/

router.route('/Admin/:id')
    // .put(admin, upload.single('imgSujets'), Admin.put)
    // .delete(admin, Admin.deleteOne)
    .put(upload.single('imgSujets'), Admin.put)
    .delete(Admin.deleteOne)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = router;
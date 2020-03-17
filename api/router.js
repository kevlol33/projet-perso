/************************************************************
*                   Importation
*************************************************************/
const
    express = require('express'),
    router  = express.Router(),
    upload  = require('./middleware/multer-config')

/************************************************************
*           Controllers du dossier API/CONTROLLERS
*************************************************************/

const
    Forum        = require('./controllers/ForumControlleur'),
    Home         = require('./controllers/HomeControlleur'),
    Login        = require('./controllers/LoginControleur'),
    Pokedex      = require('./controllers/PokedexControlleur'),
    Pokemon      = require('./controllers/PokemonControlleur'),
    Sujet        = require('./controllers/SujetControlleur'),
    AdminSujet   = require('./controllers/Admin/AdminSujetControlleur'),
    AdminPokedex = require('./controllers/Admin/AdminPokedexControlleur')
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
    .post(Auth, Forum.post)

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
*                   CRUD page AdminSujet
*************************************************************/

router.route('/AdminSujet')
    .get(admin, AdminSujet.get)
    .post(admin, upload.single('imgSujets'), AdminSujet.post)
    .delete(admin, AdminSujet.deleteAll)
    .get(AdminSujet.get)
    .post(upload.single('imgSujets'), AdminSujet.post)
    .delete(AdminSujet.deleteAll)


/************************************************************
*                   CRUD page AdminPokedex
*************************************************************/

router.route('/AdminPokedex')
    .get(admin, AdminPokedex.get)
    .post(admin, upload.single('imgPoke'), AdminPokedex.post)

/************************************************************
*                   CRUD Admin ID
*************************************************************/

router.route('/Admin/:id')
    .put(admin, upload.single('imgSujets'), AdminSujet.put)
    .delete(admin, AdminSujet.deleteOne)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = router;
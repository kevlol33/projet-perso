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
    auth = require('./middleware/auth')

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
    .get(auth, Home.get)

/************************************************************
*                   GRUD page forum
*************************************************************/

router.route('/Forum')
    .get(auth, Forum.get)

/************************************************************
*                   CRUD page Admin 
*************************************************************/

router.route('/Admin')
    .get(Admin.get)
    .post(upload.single('imgSujets'), Admin.post)
    .delete(Admin.deleteAll)

/************************************************************
*                   CRUD Admin ID
*************************************************************/

router.route('/Admin/:id', auth)
    .put(upload.single('imgSujets'), Admin.put)
    .delete(Admin.deleteOne)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = router;
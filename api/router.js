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
    forumControlleur = require('./controllers/forumcontrolleur'),
    homeConnectedControlleur = require('./controllers/homeconnectedcontrolleur'),
    homeControlleur = require('./controllers/homecontrolleur'),
    listepokémonControlleur = require('./controllers/listpokémoncontrolleur'),
    pokémonControlleur = require('./controllers/pokémoncontrolleur'),
    sujetforumControlleur = require('./controllers/sujetforumcontrolleur'),
    adminControlleur = require('./controllers/admincontrolleur'),
    userControlleur = require('./controllers/Usercontrolleur')

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
    .get(homeControlleur.get)


/************************************************************
*                   CRUD USER
*************************************************************/

router.route('/register')
    .post(homeControlleur.post)

router.route('/login')
    .post(userControlleur.post)

router.route('/homeconnected', auth)
    .get(homeConnectedControlleur.get)

/************************************************************
*                   GRUD page forum
*************************************************************/

router.route('/forum', auth)
    .get(forumControlleur.get)

/************************************************************
*                   CRUD page Admin 
*************************************************************/

router.route('/admin')
    .get(adminControlleur.get)
    .post(upload.single('imgSujets'), adminControlleur.post)
    .delete(adminControlleur.deleteAll)

/************************************************************
*                   CRUD Admin ID
*************************************************************/

router.route('/admin/:id', auth)
    .put(upload.single('imgSujets'), adminControlleur.put)
    .delete(adminControlleur.deleteOne)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = router;
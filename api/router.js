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
    forumcontrolleur = require('./controllers/forumcontrolleur'),
    homeconnectedcontrolleur = require('./controllers/homeconnectedcontrolleur'),
    homecontrolleur = require('./controllers/homecontrolleur'),
    listepokémoncontrolleur = require('./controllers/listpokémoncontrolleur'),
    pokémoncontrolleur = require('./controllers/pokémoncontrolleur'),
    sujetforumcontrolleur = require('./controllers/sujetforumcontrolleur'),
    admincontrolleur = require('./controllers/admincontrolleur')

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
    .get(homecontrolleur.get)


/************************************************************
*                   CRUD USER
*************************************************************/

router.route('/register')
    .post(homecontrolleur.post)

/************************************************************
*                   GRUD page forum
*************************************************************/

router.route('/forum')
    .get(forumcontrolleur.get)

/************************************************************
*                   CRUD page Admin 
*************************************************************/

router.route('/admin')
    .get(admincontrolleur.get)
    .post(upload.single('imgSujets'), admincontrolleur.post)
    .delete(admincontrolleur.deleteAll)

/************************************************************
*                   CRUD Admin ID
*************************************************************/

router.route('/admin/:id')
    .put(upload.single('imgSujets'), admincontrolleur.put)
    .delete(admincontrolleur.deleteOne)

/************************************************************
*                   Exportation de la route
*************************************************************/

module.exports = router;
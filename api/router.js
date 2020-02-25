//***** Importation *****//
const
    express = require('express'),
    path = require('path'),
    router = express.Router()

/* 
 *  Controllers qu'on recupère du dossier API/CONTROLLERS
 ********************************************************/
const
    forumcontrolleur = require('./controllers/forumcontrolleur'),
    homeconnectedcontrolleur = require('./controllers/homeconnectedcontrolleur'),
    homecontrolleur = require('./controllers/homecontrolleur'),
    listepokémoncontrolleur = require('./controllers/listpokémoncontrolleur'),
    pokémoncontrolleur = require('./controllers/pokémoncontrolleur'),
    sujetforumcontrolleur = require('./controllers/sujetforumcontrolleur'),
    admincontrolleur = require('./controllers/admincontrolleur')

//** Route de la page Home **/
router.route('/')
    .get(homecontrolleur.get)

//** Route de la page forum **//
router.route('/forum')
    .get(forumcontrolleur.get)

/************************************************************
* 
*            **CRUD de la page Admin Et Admin:id ** 
*  (Méthode Post: qui permet l'envois de données),
*  (Métode Get: qui permet de récupéré nos informations),
*  (Méthode Put: qui permet de metre a jour nos informations), 
*  (Méthode Délete: permet de supprimer nos informations).
*
*************************************************************/

//** Route de la page Admin **//
router.route('/admin')
    .get(admincontrolleur.get)
    .post(admincontrolleur.post)
    .delete(admincontrolleur.deleteAll)


//** Route de la page Admin ID **//
router.route('/admin/:id')
    .put(admincontrolleur.put)
    .delete(admincontrolleur.deleteOne)

//*** Exportation du router ***//
module.exports = router;
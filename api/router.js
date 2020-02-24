//***** Importation *****//
const
    express = require('express'),
    path = require('path'),
    router = express.Router()

//*** Controllers qu'on recupère du dossier API/CONTROLLERS ***// 
const
    forumcontrolleur = require('./controllers/forumcontrolleur'),
    homeconnectedcontrolleur = require('./controllers/homeconnectedcontrolleur'),
    homecontrolleur = require('./controllers/homecontrolleur'),
    listepokémoncontrolleur = require('./controllers/listpokémoncontrolleur'),
    pokémoncontrolleur = require('./controllers/pokémoncontrolleur'),
    sujetforumcontrolleur = require('./controllers/sujetforumcontrolleur')

//*** 1er route: home qui permet de gérer la page Home ***//
router.route('/')
    .get(homecontrolleur.get)


/*** 2ème routes: Article qui permet de gérer la page des Articles
**
**           /CRUD de la page Moncompte:/ 
** (Méthode Post: qui permet l'envois de données),
** (Métode Get: qui permet de récupéré nos informations),
** (Méthode Put: qui permet de metre a jour nos informations), 
** (Méthode Déléte: permet de supprimer nos informations).
**
***/
router.route('/forum')
    // .post(UserController.post)
    .get(forumcontrolleur.get)
    // .put(UserController.post)
    // .delete(UserController.delete)

//*** 3ème routes: Contact qui permet de gérer la page contact ***//
router.route('/admin')
    .get(contactController.get)

//*** Exportation du router ***//
module.exports = router;
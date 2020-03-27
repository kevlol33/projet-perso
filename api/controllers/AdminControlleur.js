/************************************************************
*                       Importation 
*************************************************************/
const

    Sujet = require('../database/Sujet')
,   User   = require('../database/User')
,   path   = require('path')
,   Fs     = require('fs')


/************************************************************
*                       Controleur Admin 
*************************************************************/
module.exports = {

/************************************************************
*                        Méthode GET 
*************************************************************/
    //*** Permet de récupérer des donnée sur la pasge admin ***//
    get: async (req, res) => {
        //** chercher les donnée a l'interieur de la base de donnée **//
        const 
            sess = req.session
            dbType1    = await Sujet.find({ type: { $lte: 1 } })
            dbType2    = await Sujet.find({ type: { $gte: 2 } })
            dbSujetsID = await Sujet.findById(req.params.id)
            dbSujets   = await Sujet.find({})
            dbUsers    = await User.find({})
        //** je logue pour voir les article dans la base de donnée **//
        // console.log(dbsujet);
        //** je demande de rester sur la page admin **//
        res.render('Admin', {
            dbSujetsID, dbSujets, dbUsers, dbType1, dbType2, sess
        })
    },

/************************************************************
*                        Méthode POST
*************************************************************/
    //*** Permet d'enregistrer un sujet dans la base de données ***//
    post: async (req, res) => {
        // condition //
        //** si req.file nes pas la **//
        if (!req.file) {
            //** alors tu me redirige sur la page home **//
            res.redirect('/Admin')
        } else {
            //** sinon tu me crée sa **//
            Sujet.create({
                ...req.body,
                imgSujets: `/assets/image/${req.file.originalname}`,
                name: req.file.originalname,
            },
                //** si il y a des errreur alors **/
                (error, post) => {
                    //** tu me redirige vers la page admin **//
                    res.redirect('/Admin')
                })
                
        }
    },

/************************************************************
*                        Méthode DELLETE(ALL) 
*************************************************************/
    //*** permet de supprimer tout les article en un clic ***//
    deleteAll: (req, res) => {
        const
        //** resolve permet de résoudre un chemin afin d'y placer ici une image **//
            Directory = path.resolve("public/image/")

        //** Méthode de supprision de tout les sujet **//
        Sujet.deleteMany((err) => {
            //** si il y a pas d'erreur **/
            if (!err) {
                //** tu me suprime toutes les images **/
                Fs.readdir(Directory, (err, files) => {
                    //** si il 'y a pas d'erreur **//
                    if (!err) {
                        for (const file of files) {
                            //** unlink suprime le dossier et les fichiers **//
                            Fs.unlink(path.join(Directory, file), (err) => {
                                //** si il a pas d'erreur **//
                                if (!err) {
                                    //** tu me logue image supprimer et le fichier **//
                                    console.log('Delete Img' + file)
                                } 
                                //** sinon tu me logue l'erreur **//
                                else {
                                    console.log(err)
                                }
                            })
                        }
                        //**apres tout sa tu me dirige sur la page admin **/
                        res.redirect('/Admin')
                    } 
                    //**sinon tu me logue l'erreur **//
                    else {
                        console.log(err)
                    }
                })
              //** logue de l'erreur **//
            } else {
                console.log(err)
            }
        })
    },
}

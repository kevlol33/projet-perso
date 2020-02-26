//***** Importation *****//
const
    Sujets = require('../database/sujetforum'),
    path = require('path'),
    fs = require('fs')


//***** Controleur du forum *****//
module.exports = {

    //*** Permet de rester sur la pasge admin ***//
    get: async (req, res) => {
        //** chercher les donnée a l'interieur de la base de donnée **//
        const dbsujet = await Sujets.find({})
        //** je logue pour voir les article dans la base de donnée **//
        // console.log(dbsujet);
        //** je demande de rester sur la page admin **//
        res.render('admin', {
            dbsujet
        })
    },

    //*** Permet d'enregistrer un sujet dans la base de données ***//
    post: async (req, res) => {
        // condition //
        //** si req.file nes pas la **//
        if (!req.file) {
            //** alors tu me redirige sur la page home **//
            res.redirect('/admin')
        } else {
            //** sinon tu me crée sa **//
            Sujets.create({
                ...req.body,
                imgSujets: `/assets/image/${req.file.originalname}`,
                name: req.file.originalname,
            },
                //** si il y a des errreur alors **/
                (error, post) => {
                    //** tu me redirige vers la page admin **//
                    res.redirect('/admin')
                })
                
        }
    },

    //*** Permet de metre a jour un sujet ***//
    put: async (req, res) => {
        const
            //** query me permer de recupere l'id d'un sujet **//
            query = { _id: req.params.id },
            //** dbsujet permet de chercher un sujet par id **//
            dbsujets = await Sujets.findById(query),
            //** pathImg permet de relier l'image du sujet dans la base de donnée **//
            pathImg = path.resolve("public/image/" + dbsujets.name)

        //** condition dans une condition **//
        //** Si req.file n'y est pas alors: **/
        if (!req.file) {
            //** tu met a jour le sujet **//
            if (req.body.title) {
                Sujets.updateOne(query, {
                    title: req.body.title
                },
                    //** sinon tu me redirige soit **/
                    (err) => {
                        //** soit a l'acceuil **//
                        if (err) res.redirect('/admin')
                        //** soit a la page admin **//
                        else res.redirect('/admin')
                    })
            }
            //** sinon ru me redirige **//
            else {
                //** a la page home **//
                res.redirect('/admin')
            }
        }
        //** sinon tout sa **//
        else {
            //** tu met a jour mon sujet **//
            Sujets.updateOne(query, {
                ...req.body,
                imgSujets: `/assets/image/${req.file.originalname}`,
                name: req.file.originalname,
            },
                //** si il y a des erreur **//
                (error, post) => {
                    //** fs.unlink permet de supprimer le fichier en asynchrone **//
                    fs.unlink(pathImg,
                        (err) => {
                            //** si il y a une erreur tu me la logue **/
                            if (err) {
                                console.log(err)
                            }
                            //** sinon tu me logue que le fichier et supprimer et tu me redirige sur la page admin **//
                            else {
                                console.log('File Deleted.')
                                res.redirect('/admin')
                            }
                        })
                })
        }
    },

    //*** Permet de suprimer un sujet de la basse de données ***//
    deleteOne: async (req, res) => {
        //** chercher les sujets dans la base de donnée **//
        const dbsujets = await Sujets.findById(req.params.id),
              //** pathImg permet de supprimer l'image lier au sujet supprimer **//
              pathImg = path.resolve("public/image/" + dbsujets.name)
              

        //** foncttion pour supprimer un sujet **//
        Sujets.deleteOne({
            //** id est dans req.params.id **//
            _id: req.params.id
        },
            //** Gestion des erreur **//
            (err) => {
                //** si il y a pas d'erreur **/
                if (!err) {
                    //** fs.unlink permet de supprimer l'image du sujet **//
                    fs.unlink(pathImg,
                        //** Gestion des erreurs **//
                        (err) => {
                            //** si i y a une erreur tu me la logue **//
                            if (err) {
                                console.log(err)
                            }
                            //** sinon tu me logue que le fichier et supprimer et tu me redirige sur la page admin **//
                            else {
                                console.log('fichier supprimer')
                                res.redirect('/admin')
                            }
                        })
                }
                //** si il y a une erruer tu me logue l'erreur **/
                else {
                    res.send(err)
                }
            })
    },

    //*** permet de supprimer tout les article en un clic ***//
    deleteAll: (req, res) => {
        const
        //** resolve permet de résoudre un chemin afin d'y placer ici une image **//
            directory = path.resolve("public/image/")

        //** Méthode de supprision de tout les sujet **//
        Sujets.deleteMany((err) => {
            //** si il y a pas d'erreur **/
            if (!err) {
                //** tu me suprime toutes les images **/
                fs.readdir(directory, (err, files) => {
                    //** si il 'y a pas d'erreur **//
                    if (!err) {
                        for (const file of files) {
                            //** unlink suprime le dossier et les fichiers **//
                            fs.unlink(path.join(directory, file), (err) => {
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
                        res.redirect('/admin')
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
    }
}

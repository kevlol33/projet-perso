/************************************************************
*                       Importation 
*************************************************************/
const Multer = require('multer')

/************************************************************
*                       Chemin pour placer l'iamge
*************************************************************/
const storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/image')
  },
  //** rename l'image **//
  filename: (req, file, cb) => {
    const ext = file.originalname,
      date = Date.now()
    cb(null, ext)
  }
})

/************************************************************
*                       Mise a jour de l'image
*************************************************************/
const upload = Multer({
    storage: storage,
    //** régle pour l'imade uploder **//
    limits: {
        fileSize: 1 * 4098 * 4098,
        files: 1
    },
    //** filtrer le type d'image **/
    fileFilter: (req, file, cb) => {
      //** si l'image est en png, jpg, gif, ou jpeg**//
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/gif" ||
            file.mimetype === "image/jpeg"
        ) {
          //** tu l'upload **/
            cb(null, true)
        } 
        //** sinon **/
        else {
            //** tu annule et tu me repond que le type de fichier n'est pas bon **//
            cb(null, false)
            cb(new Error('Le fichier doit être au format png, jpg, jpeg ou gif.'))
        }
    }
})

/************************************************************
*                       Exportation sous le nom upload
*************************************************************/
module.exports = upload
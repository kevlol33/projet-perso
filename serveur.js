/************************************************************
*                        Importation 
*************************************************************/
const
    bodyParser     = require('body-parser'),
    connectFlash   = require('connect-flash'),
    express        = require('express'),
    app            = express(),
    expressSession = require('express-session'),
    hbs            = require('express-handlebars'),
    handlebars     = require('handlebars'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    MongoStore     = require('connect-mongo'),
    passport       = require('passport'),
    port           = process.env.PORT || 3000;

/************************************************************
*                        Methode Override 
*************************************************************/
app.use(methodOverride('_method'));

/************************************************************
*                        Mongoose 
*************************************************************/
const
    urlDb      = 'mongodb://localhost:27017/BaseJs',
    mongoStore =  MongoStore(expressSession);

mongoose.connect(urlDb, {
    useCreateIndex:     true,
    useNewUrlParser:    true,
    useUnifiedTopology: true
    });

/************************************************************
*                        Express Session 
*************************************************************/
app.use(expressSession({

    secret:             'securite',
    name:               'ptitBiscuit',
    saveUninitialized:  true,
    resave:             false,
    store:              new mongoStore({
    mongooseConnection: mongoose.connection
    })
}));

/************************************************************
*                        App.Use 
*************************************************************/
app.use('/assets', express.static('public'));
app.use(passport.initialize())
app.use(passport.session())
app.use(connectFlash())
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true}));

/************************************************************
*                        Handlebars 
*************************************************************/
app.set   ('view engine', 'hbs');
app.engine('hbs', hbs({
          extname: 'hbs',
          defaultLayout: 'main'
}));

/************************************************************
*                       Uttilisation du middleware 
*************************************************************/

app.use('*', (req, res, next) => {
    const sess = req.session
    console.log(sess)
        if (sess.isBan === true) {
            console.log('sess isBan ')
        } else if (sess.status === 'user') {
            console.log('log user sess')
            res.locals.user = req.session.status
            if (sess.isAdmin === true) {
                console.log('log Admin sess')
                res.locals.isAdmin = req.session.status
            } 
        }

    // La function next permet qu'une fois la condition effectuer il reprenne son chemin
    next()
});

/************************************************************
*                        Routeur
*************************************************************/
const 
    ROUTER = require('./api/router');
    app.use('/', ROUTER);

/************************************************************
*                        Erreur 404 
*************************************************************/
// app.use((req, res) => {
//     res.render('err404')
// })

/************************************************************
*                        Port 
*************************************************************/
app.listen(port, () => {
    console.log("le serveur tourne sur le port: " + port);
    
});
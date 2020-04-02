/************************************************************
*                        Importation 
*************************************************************/
const
    bodyParser     = require('body-parser')
,   connectFlash   = require('connect-flash')
,   express        = require('express')
,   app            = express()
,   cookieParser   = require('cookie-parser')
,   expressSession = require('express-session')
,   flash          = require('express-flash')
,   hbs            = require('express-handlebars')
,   handlebars     = require('handlebars')
,   keys           = require('./api/config/config')
,   methodOverride = require('method-override')
,   mongoose       = require('mongoose')
,   MongoStore     = require('connect-mongo')
,   nodemailer     = require('nodemailer')
,   NODEMAILER     = require('./api/nodemailer')
,   passport       = require('passport')
,   port           = process.env.PORT || 3000;

/************************************************************
*                        Methode Override 
*************************************************************/
app.use(methodOverride('_method'));

/************************************************************
*                        Mongoose 
*************************************************************/
const
    urlDb      = keys.DB.dev
,   mongoStore =  MongoStore(expressSession);

mongoose.connect(urlDb, {
    useCreateIndex:     true
,   useNewUrlParser:    true
,   useUnifiedTopology: true
    });

/************************************************************
*                        Express Session 
*************************************************************/

app.use(expressSession({
    secret:             keys.Cookie.secret
,   name:               keys.Cookie.name
,   saveUninitialized:  true
,   resave:             false
,   store:              new mongoStore({
    mongooseConnection: mongoose.connection
    })
}));

/************************************************************
*                        App.Use 
*************************************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true}));
app.use(cookieParser());
app.use(connectFlash());
app.use('/assets', express.static('public'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


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
    if (sess.status === 'user') {
        console.log('log user sess')
        res.locals.user = req.session.status
            if (sess.isBan === true) {
                console.log('sess isBan ')
                res.locals.isBan = req.session.isBan}
            else if (sess.isAdmin === true) {
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
*                        Routeur
*************************************************************/

app.use('/mailer', NODEMAILER)

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
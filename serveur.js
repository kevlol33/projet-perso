//**** Importation ****//
const
    bodyParser     = require('body-parser'),
    express        = require('express'),
    app            = express(),
    expressSession = require('express-session'),
    hbs            = require('express-handlebars'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    MongoStore     = require('connect-mongo'),
    port           = process.env.PORT || 3000;

//*** Method Override ***//
app.use(methodOverride('_method'));

//*** Mongoose ***//
const
    urlDb      = 'mongodb://localhost:27017/BaseJs',
    mongoStore = MongoStore(expressSession)

mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })

//*** Handlebars ***//
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));

//*** Express-session ***//
app.use(expressSession({

    secret: 'securite',
    name: 'ptitBiscuit',
    saveUninitialized: true,
    resave: false,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));

//*** app.use ***//
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//*** app.use ***/
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//*** Mise en place du router ****/
const 
    ROUTER = require('./api/router');
app.use('/', ROUTER)

//*** mise en place de la page 404 ***//
// app.use((req, res) => {
//     res.render('err404')
// })

//*** Port ***//
app.listen(port, () => {
    console.log("le serveur tourne sur le port: " + port);
    
});
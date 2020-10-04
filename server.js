const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./models');
const connectDB = db.connectDB;

connectDB();

app.use(express.json({extended:false}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.set('view engine', 'ejs');



app.use('/', controllers.landing);
app.use('/register', controllers.register);
app.use('/login', controllers.login)
app.use('/home', controllers.home);
app.use('/profile', controllers.profile);
app.use('/faq', controllers.faq);
app.use('/profiles', controllers.profiles);
app.use('/posts', controllers.posts);
app.use('/gigs', controllers.gigs);

app.listen( PORT, () => {
    console.log(`Now on port ${PORT}`)
})


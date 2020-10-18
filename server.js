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


app.use(cors());
app.use(express.json({extended:false}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.use('/api/auth', controllers.auth);
app.use('/api/home', controllers.home);
app.use('/api/user', controllers.user);
app.use('/api/profile', controllers.profile);
app.use('/api/faq', controllers.faq);
app.use('/api/profiles', controllers.profiles);
app.use('/api/posts', controllers.posts);
app.use('/api/gigs', controllers.gigs);

app.listen( PORT, () => {
    console.log(`Now on port ${PORT}`)
})


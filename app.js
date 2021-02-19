const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const passport = require('passport'); // passport
const session = require('express-session'); // sessio passport:ia varten

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ryhmaRouter = require('./routes/ryhma');
const tuoteRouter = require('./routes/tuote');
// const tilausRouter = require('./routes/tilaus');

const passportFunction = require('./passportfunction');

// Suoritetaan passport-funktio aina kun sovellus käynnistyy
passportFunction(passport);

const app = express();

// Seuraavaa käytetään mongo-kontin kanssa
// mongodb://root:password@172.22.0.1:27017/admin
mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if (err) {
        console.log('Yhteys ei toimi. Tuli virhe ' + err);
    } else {
        console.log('Yhteys kantaan toimii');
    }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// sessio passporttia varten
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true })); // sovelluksen sessio käyttöön
app.use(passport.initialize());
app.use(passport.session()); // passportin login-sessio


// cors sallii resurssien jaon kahden eri palvelimella sijaitsevien sovellusten kesken.
// Yksinkertaisin tapa ottaa cors käyttöön kaikille reiteille
// on mahdollista tehdä myös rajoituksia siihen mitä reittejä saa käyttää.
// app.use(cors());  eli cors on auki kaikille reiteille
corsOptions = {
    origin: 'http://localhost:4200',
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ryhma', ryhmaRouter);
app.use('/tuote', tuoteRouter);
//app.use('/tilaus', tilausRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
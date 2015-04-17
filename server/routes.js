var express = require('express'),
    passport = require('passport'),
    path = require('path');



var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session'),

    mongoose=require('../server/mongoose.js');

module.exports=function(app) {
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({
        extended: true
    }));

// required for passport
    app.use(session({
        secret: 'mcqs3',
        resave: false,
        saveUninitialized: true
    })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

    app.use(express.static(__dirname+'/../public'));
    app.get('/api/users', mongoose.getUser);
    app.post('/api/users', mongoose.createUser);
}
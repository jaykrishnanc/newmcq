/**
 * Created by JAYA on 17-04-2015.
 */
var express = require('express'),
    app = express(),
    mongoose=require('../server/mongoose.js');

app.get('/api/getusers',mongoose.getUser);

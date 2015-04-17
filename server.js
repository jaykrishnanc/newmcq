/**
 * Created by JAYA on 17-04-2015.
 */
var express = require('express');


var app = express();
require('./server/mongoose');
require('./server/routes');

app.listen(5000,function(){
    console.log("Server on 5000")
});
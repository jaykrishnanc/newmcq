/**
 * Created by JAYA on 17-04-2015.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb');

//Connection

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('questiondb db opened');
});

//Models
    //user Model
var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    fname    : String
    , laname     : String
    , regno      : String
    , password      : String
    , course    : String
    , marklist   : [
        {
            semester    : String
            ,   paper : String
            ,   marks   : String
            ,   modmark : String
            ,   practical   : String
        }
    ]
});

var
     userModel = db.model('userModel', userSchema)
    , m = new userModel;
m.save();

//Controllers
    //User Controller
exports.getUser = function(req, res) {

    userModel.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};
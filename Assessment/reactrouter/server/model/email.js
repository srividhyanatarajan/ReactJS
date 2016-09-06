var mongoose = require('mongoose');
var schema = mongoose.Schema;

var emails = new schema({
              emailfrom:String,
              emailto:String,
              emailmessage:String
            });

module.exports = mongoose.model('Emails',emails);

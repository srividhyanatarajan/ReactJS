var mongoose = require('mongoose');
var schema = mongoose.Schema;

var participantdb = new schema({
              wave:String,
              name:String,
              email:String,
              phone:String,
              giturl:String,
              empcode:String,
              empdept:String,
              empdesign:String,
              skills:String,
              exp:String,

            });

module.exports = mongoose.model('Participantdb',participantdb);

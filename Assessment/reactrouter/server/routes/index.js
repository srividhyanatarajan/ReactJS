var express = require('express');
var router = express.Router();

//var email = require('../model/email');
var participantdb = require('../model/participantdb');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postparticipantdata', function(req, res, next) {
console.log("***********postparticipantdata :::::**********");

console.log(req.body.wave);      // your JSON
var saveparticipant = new participantdb();
saveparticipant.wave = req.body.wave;
saveparticipant.name = req.body.name;
saveparticipant.email = req.body.email;

saveparticipant.phone = req.body.phone;
saveparticipant.giturl = req.body.giturl;
saveparticipant.empcode = req.body.empcode;

saveparticipant.empdept = req.body.empdept;
saveparticipant.empdesign = req.body.empdesign;
saveparticipant.skills = req.body.skills;

saveparticipant.exp = req.body.exp;
var success="";
if(req.body)
{
  saveparticipant.save(function(err,msg){
    if(err)
    {
      return (console.log(err));
    }
    else
    {
      success=true;
      //res.send(success);
    }
  });
}
});

router.get('/getparticipantdata', function(req, res, next) {
console.log("getparticipantdata*********** :::::");     // your JSON

participantdb.find({}, function(err, participants) {
  if (err) throw err;
  console.log("***********************");
  // object of all the users
  console.log("participants data ::::::"+participants);
  res.json(participants);

  //console.log("email from ::::::"+users.emailfrom);
});
});

router.post('/savemymailData', function(req, res, next) {
  console.log("request body ======>"+req.body.fromMessage);      // your JSON
  console.log("request body ======>"+req.body.subjectMessage);      // your JSON
  console.log("request body ======>"+req.body.bodyMessage);      // your JSON
  //res.send(req.body);
  var saveemail = new email();
  saveemail.emailfrom = req.body.fromMessage;
  saveemail.emailto = req.body.subjectMessage;
  saveemail.emailmessage = req.body.bodyMessage;
  var success="";
  if(req.body)
  {
    saveemail.save(function(err,msg){
      if(err)
      {
        return (console.log(err));
      }
      else
      {
        success=true;
        res.send(success);
      }
    });
  }
});

router.get('/mymailData', function(req, res, next) {
console.log("mymailData :::::");     // your JSON

email.find({}, function(err, mails) {
  if (err) throw err;
  console.log("***********************");
  // object of all the users
  console.log("mails data ::::::"+mails);
  res.json(mails);

  //console.log("email from ::::::"+users.emailfrom);
});
});

router.put('/updatemymailData', function(req, res, next) {
console.log("updated :::::");     // your JSON
});

router.delete('/deletemymailData', function(req, res, next) {
console.log("deleted :::::");     // your JSON
//  res.send({mymessage:"This is my deletemymailData mail Message"});
});

module.exports = router;

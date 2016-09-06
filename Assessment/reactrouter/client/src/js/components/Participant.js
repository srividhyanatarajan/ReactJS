var React = require('react');
var ReactDom = require('react-dom');
var ManageParticipant = require('./ManageParticipant');
var ViewParticipant = require('./ViewParticipant');
var loadedData = false;

var Participant = React.createClass({


  render : function(){

    return(
        <div>
            <ManageParticipant/>
            <br/><br/>

        </div>
    );
  }
});

module.exports=Participant;

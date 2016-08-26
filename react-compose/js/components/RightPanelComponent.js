var React = require('react');
var ReactDom = require('react-dom');
var Mail = require('./MailComponent');

var RightPanelComponent = React.createClass({
  render: function(){
        var subject,date,from;
        var myArray = this.props.completeMessageData.map(function(e,i){
                      for(var i=0; i < e.payload.headers.length ;i++)
                      {
                        if(e.payload.headers[i].name==='From')
                        {
                          from = 'from: '+e.payload.headers[i].value;
                        }
                        if(e.payload.headers[i].name==='Subject')
                        {
                          subject ='subject: ' +e.payload.headers[i].value;
                        }
                        if(e.payload.headers[i].name==='Date')
                        {
                          date = 'date: '+e.payload.headers[i].value;
                        }
                      }
                      return (
                          <Mail from={from} subject={subject} date={date}  />
                      )
                    });
                    return (
                          <div>
                            {myArray}
                          </div>
                            )
                    }
              });

module.exports=RightPanelComponent

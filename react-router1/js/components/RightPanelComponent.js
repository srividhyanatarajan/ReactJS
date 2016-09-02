var React = require('react');
var MailComponent = require('./MailComponent');

var RightPanelComponent = React.createClass({
  getHTMLPart: function(arr)
{
  for(var x = 0; x <= arr.length; x++)
  {
    if(typeof arr[x].parts === 'undefined')
    {
      console.log("asdadadsadad-------------");
      if(arr[x].mimeType === 'text/html')
      {
        return arr[x].body.data;
      }
    }
    else
    {
      console.log("no parts defined :::");
      return this.getHTMLPart(arr[x].parts);
    }
  }
  return '';
},
  render: function(){
        var that=this;
        var myArray = this.props.completeMessageData.map(function(e){
        if(typeof e.payload.parts === 'undefined')
        {
          console.log("if part enters");
          console.log("e.payload.parts :::"+e.payload.parts);
          encodedBody = e.payload.body.data;
          console.log("e.payload.body.data :::"+e.payload.body.data);
        }
        else
        {
          encodedBody = that.getHTMLPart(e.payload.parts);
          console.log("encodedBody :::"+encodedBody);
        }
        var subject;
        var date;
        var from;
      for(var i=0; i < e.payload.headers.length ;i++)
      {
        if(e.payload.headers[i].name==='From')
        {
          from = e.payload.headers[i].value;
        }
        if(e.payload.headers[i].name==='Subject')
        {
          subject = e.payload.headers[i].value;
        }
        if(e.payload.headers[i].name==='Date')
        {
          date = e.payload.headers[i].value;
        }
      }
                      return (
                          <MailComponent efrom={from} esubject={subject} edate={date} encodedBodyToChild={encodedBody} />
                      );
                    });
                    return (
                          <div>
                            {myArray}
                          </div>
                        );
                    }
              });

module.exports=RightPanelComponent

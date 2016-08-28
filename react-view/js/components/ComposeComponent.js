var React = require('react');


var ComposeComponent  = React.createClass({
  getInitialState : function(){
    return ({messageTo:'',messageSubject:'',messageData:''})
  },

/*sendMessage : function(){
  var accessToken = localStorage.getItem('gToken');
  console.log("compose component Token Id===>"+accessToken);
  var emailData = '';
  var HeaderData = {'To':this.state.messageTo,'Subject':this.state.messageSubject};
  console.log("HeaderData ::::"+HeaderData);

  for (var header in HeaderData)
  {
    emailData += header += ":" +HeaderData[header]+"\r\n";
    console.log("email---"+emailData);

   console.log("header---"+header);

   console.log("HeaderData[header]---"+HeaderData[header]);
  }
  emailData += "\r\n" + this.state.messageData;
  console.log("emailData :::"+emailData);
  var encodedData = window.btoa(emailData).replace(/\+/g, '-').replace(/\//g, '_');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/sr.vidhya1%40gmail.com/messages/send?key={AIzaSyC--zOrmczG5Vh87yGGpbD1-H9bLYchSiw}',
   dataType: 'json',
   type: 'POST',
   data: JSON.stringify({'raw' : encodedData}),
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(data)
   {
     console.log("success enters");
   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.log("********************error::::");
     console.error(err.toString());

   }.bind(this)
});
},*/

sendMessage: function()
{
 var accessToken = localStorage.getItem('gToken');
 console.log("Access token: "+accessToken);
 var email = '';
 var Headers = {'To': this.state.messageTo,'Subject': this.state.messageSubject};
 for(var header in Headers)
 {
   email += header += ": "+Headers[header]+"\r\n";
   console.log("email---"+email);
   console.log("header---"+header);
   console.log("Headers[header]---"+Headers[header]);
  }
 email += "\r\n" + this.state.messageData;
 console.log("constructed email: " +email);
 var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
 $.ajax({
        url: 'https://www.googleapis.com/gmail/v1/users/sr.vidhya1%40gmail.com/messages/send?key={AIzaSyC--zOrmczG5Vh87yGGpbD1-H9bLYchSiw}',
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: JSON.stringify({'raw': encodedMessage}),
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer "+accessToken);
        },
  success: function(data)
  {
    console.log("Success");
  }.bind(this),
  async: false,
  error: function(xhr, status, err) {
    console.error("Error.."+err.toString());
  }.bind(this)
});
},
handleToData : function(e)
{
  this.setState({messageTo:e.target.value});
},
handleSubData : function(e)
{
  this.setState({messageSubject:e.target.value});
},
handleMessageData : function(e)
{
  this.setState({messageData:e.target.value});
},
render:function(){
 {/*console.log('Inside label'+this.props.Lgname);*/}
   return(

   <div>
       <a href="#myModal" role="button" className="btn btn-info pull-center" data-toggle="modal"><span className="glyphicon glyphicon-hand-up"></span>Compose</a>
       <div className="modal fade" id="myModal">
           <div className="modal-dialog">
           <div className="modal-content">
                 <div className="modal-header">
                      <button className="close" data-dismiss="modal">x</button>                                                <h6 className="modal-title">New Message</h6>                                                    </div>
                         <div className="modal-body">
                            <form className="form-horizontal">
                                  <div className="form-group">
                                      <div className="col-lg-10">
                                          <input className="form-control" id="inputTo" onChange={this.handleToData}  placeholder="To" type="text"/>
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <div className="col-lg-10">
                                          <input className="form-control" id="inputSub" onChange={this.handleSubData} placeholder="Subject" type="text"/>
                                      </div>
                                   </div>
                                   <div className="form-group">
                                   </div>
                                   <div className="form-group">
                                      <div className="col-lg-10">
                                         <textarea className="form-control" id="inputMessage" onChange={this.handleMessageData} placeholder="Message" rows="5"></textarea>                                    </div>
                                      </div>
                            </form>
                       </div>
                       <div className="modal-footer">
                          <div className="pull-right">
                           <button className="btn btn-primary" type="submit" onClick={this.sendMessage}>send</button>
                           <button className="btn btn-danger" type="button" data-dismiss="modal">Close</button>
                          </div>
                        </div>
               </div>
             </div>
           </div>
       </div>
   );
 }
});

module.exports=ComposeComponent

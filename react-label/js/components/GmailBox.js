var React = require('react');
var LeftPanelComponent = require('./LeftPanelComponent');
var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   {/*var CLIENTID    =   '238770194091-jilf1hfa4svadgmkpc3dgrar3k53mvr0.apps.googleusercontent.com';*/}
   var CLIENTID    =   '144924874595-6rkumnn9i5peioq53kbteodts6lju990.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');    var pollTimer   =   window.setInterval(function()
   {
     try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();
 },  allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyAJrdDygyaqs7n7Q625-cvOEmtY2lpHvUk}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        console.log("request ::::"+request);
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
        console.log("accessToken ::::"+accessToken);
      },
      success: function(data)
      {
        this.setState({allLabelsData:data.labels});
        loadedData=true;
        console.log("gmail =====>"+data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("I am getting error :::");
        console.error(err.toString());
      }.bind(this)
   });  },  render:function()
 {
   var leftPanel;
   var rightPanel;    if(loadedData){
     leftPanel =  <LeftPanelComponent allLabelsData={this.state.allLabelsData}/>
     rightPanel='  Work In Progress..........';
   }      return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">SignIn</button>
                  </div>
                  <div className="col-lg-8 pull-right">
                    <h2>ReactMails</h2>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-2">
                    {leftPanel}
                  </div>
                 <div className="col-lg-10">
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });
 module.exports=GmailBox

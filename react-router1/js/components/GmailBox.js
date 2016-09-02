var React = require('react');
var LeftPanelComponent = require('./LeftPanelComponent');
var RightPanelComponent = require('./RightPanelComponent');
var MailComponent = require('./MailComponent');

var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[],allMessagesData:[],allInboxData:[],completeMessageData1:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly';
   {/*var CLIENTID    =   '238770194091-jilf1hfa4svadgmkpc3dgrar3k53mvr0.apps.googleusercontent.com';*/}
   var CLIENTID    =   '144924874595-6rkumnn9i5peioq53kbteodts6lju990.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');
   var pollTimer   =   window.setInterval(function()
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
 },
 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyC--zOrmczG5Vh87yGGpbD1-H9bLYchSiw}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        console.log("label ajax call labels id ====>"+data.labels);
        console.log("dsadsaddsadasd sss::ss:"+JSON.stringify(data.labels));
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      //  this.getEmailByLabel(labelId);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
   this.getEmailByLabel("INBOX");
  },

    getEmailByLabel : function(labelId){

      var accessTokenId = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/sr.vidhya1%40gmail.com/messages?includeSpamTrash=false&labelIds='+labelId+'&maxResults=5&key={AIzaSyC--zOrmczG5Vh87yGGpbD1-H9bLYchSiw}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {

        request.setRequestHeader("Authorization", "Bearer "+accessTokenId);
      },
      success: function(data)
      {
        this.setState({allMessagesData:data.messages});
        var i, messarray=[];
        for(i=0;i<data.messages.length;i++)
        {
          messarray.push(this.getEmailByLabelIDMessage(data.messages[i].id,accessTokenId));
          console.log("messarray ::::"+messarray);
        }
        this.setState({completeMessageData1:messarray});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
   },


   getEmailByLabelIDMessage : function(id,accessTokenId){
     var arrdata = $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/sr.vidhya1%40gmail.com/messages/'+id+'?key={AIzaSyC--zOrmczG5Vh87yGGpbD1-H9bLYchSiw}',
      dataType: 'json',
      type: 'GET',
      async: false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessTokenId);
      },
      success: function(data)
      {
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   }).responseJSON;
   return arrdata;

 },
    render:function()
 {
   var leftPanel;
   var rightPanel;
     if(loadedData){
     leftPanel =  <LeftPanelComponent allLabelsData={this.state.allLabelsData} getEmailByLabel={this.getEmailByLabel}/>
     rightPanel = <RightPanelComponent completeMessageData={this.state.completeMessageData1} />
     {/*rightPanel='  Work In Progress..........';*/}
   }      return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                    <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">LogIN</button>
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

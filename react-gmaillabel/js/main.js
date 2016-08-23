var React = require('react');
var ReactDom = require('react-dom');
var NavComponent = require('./components/NavComponent');
var LeftPanelComponent = require('./components/LeftPanelComponent');
var RightPanelComponent = require('./components/RightPanelComponent');
var GmailBox = require('./components/GmailBox');

var arraydata1 = {
 "labels": [
  {
   "id": "Label_3",
   "name": "companies",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "Label_13",
   "name": "wipro",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "type": "system"
  },
  {
   "id": "Label_5",
   "name": "Meen",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_9",
   "name": "Project",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_11",
   "name": "PSSPT",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "type": "system"
  },
  {
   "id": "Label_12",
   "name": "Nodejs",
   "type": "user"
  },
  {
   "id": "Label_4",
   "name": "m.tech group",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_7",
   "name": "Nabble posts",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_10",
   "name": "sree",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "Label_8",
   "name": "persevere",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_6",
   "name": "mg",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_1",
   "name": "Careers",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "Label_2",
   "name": "certificate",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
 ]
}

var  arraydata = arraydata1.labels
var MainComponent = React.createClass({

  getInitialState: function() {
        return {labels: []}
    },
  render: function(){
    console.log("1111::::"+arraydata);
   console.log("222lll::::"+arraydata[0].id);

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavComponent/>
          </div>
        </div>
        <div className="row">
      		<div className="col-sm-12">
          <div className="row" className="rowtop">
                <GmailBox />
              {/*  <LeftPanelComponent ldata={this.props.ldata}/>
                <RightPanelComponent/>*/}
          </div>
          </div>
        </div>

      </div>
    );
  }
});

ReactDom.render(<MainComponent/>,document.getElementById('app'));

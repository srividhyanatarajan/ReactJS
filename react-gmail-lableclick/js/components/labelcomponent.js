var React = require('react');
var ReactDom = require('react-dom');
var NavComponent = require('./NavComponent');
var LeftPanelComponent = require('./LeftPanelComponent');
var RightPanelComponent = require('./RightPanelComponent');

var LabelComponent = React.createClass({

  handleClick1:function(){
    console.log("clicked handle event :::");
    this.props.handleClick(this.props.id);
  },
  render: function(){
        return (
          <div>
            <a href="#" onClick={this.handleClick1}>{this.props.name}</a>
          </div>
        )
      }
});
module.exports=LabelComponent

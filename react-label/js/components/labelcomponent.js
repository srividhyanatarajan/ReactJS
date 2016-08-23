var React = require('react');
var ReactDom = require('react-dom');
var NavComponent = require('./NavComponent');
var LeftPanelComponent = require('./LeftPanelComponent');
var RightPanelComponent = require('./RightPanelComponent');


var LabelComponent = React.createClass({
  render: function(){
        return (
          <div>
            <a href={this.props.id}>{this.props.name}</a>
          </div>
        )
      }
});
module.exports=LabelComponent

var React = require('react');
var ReactDom = require('react-dom');
var GrandComponent = require('./GrandComponent');




var MySecondComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h3>This is my Second React Component</h3>
          {this.props.pizza}
        <GrandComponent food='corn pizza'/>

      </div>
    );
  }
});


module.exports=MySecondComponent

var React = require('react');
var ReactDom = require('react-dom');



var MySecondComponent = React.createClass({
  render: function(){
    return(
      <div>
      <h3>This is my Second React Component</h3>
      </div>
    );
  }
});


module.exports=MySecondComponent

var React = require('react');
var ReactDom = require('react-dom');




var GrandComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h4>This is my grand child Component</h4>
        {this.props.food}

      </div>
    );
  }
});


module.exports=GrandComponent

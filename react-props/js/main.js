var React = require('react');
var ReactDom = require('react-dom');
var MySecondComponent = require('./components/MySecondComponent');


var MainComponent = React.createClass({
  render: function(){
    return(
      <div>
      <h1>This is my First React Component</h1>
      <MySecondComponent pizza='cheese pizza'/>
      </div>
    );
  }
});

ReactDom.render(<MainComponent/>,document.getElementById('app'));

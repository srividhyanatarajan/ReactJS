var React = require('react');

var NavLink = require('./NavLink');
var NavBar= React.createClass({

  render : function(){
    return (
      <div className = "container-fluid">
        <ul className = "nav navbar-nav">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/gmailbox">Gmail</NavLink></li>
            <li><NavLink to="/about/react">About react</NavLink></li>
            <li><NavLink to="/about/router">About router</NavLink></li>
        </ul>
      </div>
    );
  }
});

module.exports = NavBar;

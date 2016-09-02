var React = require('react');

var NavLink = require('./NavLink');
var NavBar= React.createClass({

  render : function(){
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
            <div className = "nav-collapse collapse navbar-responsive-collapse">
              <ul className = "nav navbar-nav">
                  <li className="active"><NavLink to="/home"><span className="glyphicon glyphicon-home"></span>Homee</NavLink></li>
                  <li><NavLink to="/gmailbox"><span className="glyphicon glyphicon-envelope"></span>Gmail</NavLink></li>
                  <li><NavLink to="/about/react">About react</NavLink></li>
                  <li><NavLink to="/about/router">About router</NavLink></li>
              </ul>
            </div>
      </div>
      </div>
    );
  }
});

module.exports = NavBar;

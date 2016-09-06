var React = require('react');
var {Link} = require('react-router');
var NavBar= React.createClass({

  render : function(){
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
            <div className = "nav-collapse collapse navbar-responsive-collapse">

              <ul className = "nav navbar-nav">
                  <li className="active"><Link to="/home"><span className="glyphicon glyphicon-home"></span>Home</Link></li>
                  <li><Link to="/participant"><span className="glyphicon glyphicon-envelope"></span>Manage Participant</Link></li>
                  <li><Link to="/viewparticipant"><span className="glyphicon glyphicon-envelope"></span>
                  View Participant</Link></li>
              </ul>
            </div>
      </div>
      </div>
    );
  }
});

module.exports = NavBar;

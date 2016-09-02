var React = require('react');

var About = React.createClass({

  render : function(){
    return (
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-lg-12">
            About US :<h2>{this.props.params.aboutName}</h2>
            <p>This is my Gmail API to extract your email</p>
            <p><button className="btn btn-default btn-large">Learn More</button></p>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = About;

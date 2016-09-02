var React = require('react');
var ReactDom = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var Home = require('./components/Home');
var GmailBox = require('./components/GmailBox');
var About = require('./components/About');
var NavBar = require('./components/NavBar');

var MainComp = React.createClass({
  render : function(){
    return(
      <div>
        <NavBar/>
        <br/><br/><br/><br/><br/>
        {this.props.children}
        Hello

      </div>
    );
  }
});

ReactDom.render(
  <Router history = {browserHistory}>
      <Route path="/" component={MainComp}>
          <IndexRoute component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/gmailbox" component={GmailBox}/>
          <Route path="/about/:aboutName" component={About}/>

      </Route>
  </Router>,document.getElementById('app'));

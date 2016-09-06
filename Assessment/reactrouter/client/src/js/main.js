var React = require('react');
var ReactDom = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var Home = require('./components/Home');
var Participant = require('./components/Participant');
var ViewParticipant = require('./components/ViewParticipant');

//var GmailBox = require('./components/GmailBox');
//var About = require('./components/About');
var NavBar = require('./components/NavBar');

var MainComp = React.createClass({
  render : function(){
    return(
      <div>
        <NavBar/>
        <br/>
        {this.props.children}
      </div>
    );
  }
});

ReactDom.render(
  <Router history = {browserHistory}>
      <Route path="/" component={MainComp}>
          <IndexRoute component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/participant" component={Participant}/>
          <Route path="/viewparticipant" component={ViewParticipant}/>
      </Route>
  </Router>,document.getElementById('app'));

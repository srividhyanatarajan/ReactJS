var React = require('react');
var ReactDom = require('react-dom');



var NavComponent = React.createClass({
  render: function(){
    return(

        <div className="navbar navbar-inverse navbar-fixed-top">
 				<div className="container">


 					<button className="navbar-toggle" data-target=".navbar-responsive-collapse"
          data-toggle="collapse" type="button">
 						<span className="icon-bar"></span>
 						<span className="icon-bar"></span>
 						<span className="icon-bar"></span>
 					</button>


 					<div className="nav-collapse collapse navbar-responsive-collapse">
 						<ul className="nav navbar-nav">
 							<li className="active">
               <a href="#"><span className="glyphicon glyphicon-home"></span> Homaaa  ee</a>
 	            </li>
 							<li className="dropdown">
 								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Electronic Items
                <strong className="caret"></strong></a>

 								<ul className="dropdown-menu">
 									<li>
 										<a href="#">Camera</a>
 									</li>

 									<li>
 										<a href="#">Pendrive</a>
 									</li>

 									<li>
 										<a href="#">Hard Disk</a>
 									</li>

 									<li className="divider"></li>

 									<li className="dropdown-header">More Services</li>

 									<li>
 										<a href="#">Content Creation</a>
 									</li>

 									<li>
 										<a href="#">Social Media Marketing</a>
 									</li>
 								</ul>
 							</li>
 	            <li>
 	              <a href="#">ContactUs</a>
 	            </li>
 	            <li>
 	              <a href="#">Help</a>
 	            </li>

 						</ul>


 						<ul className="nav navbar-nav pull-right">
 							<li className="dropdown">
 								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <span className="glyphicon glyphicon-user"></span> My Account <strong className="caret"></strong></a>

 								<ul className="dropdown-menu">
 									<li>
 										<a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a>
 									</li>

 									<li>
 										<a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
 									</li>

 									<li>
 										<a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
 									</li>

 									<li className="divider"></li>

 									<li>
 										<a href="#"><span className="glyphicon glyphicon-off"></span> Sign out</a>
 									</li>
 								</ul>
 							</li>
 						</ul>
 					</div>

 				</div>
 			</div>



    );
  }
});


module.exports=NavComponent

var React = require('react');
/*var viewComponent = require('./viewComponent');
*/
var Modalwindow1=require('./Modalwindow1.js')


var MailComponent = React.createClass({
  getInitialState : function(){
    return ({status:false});
  },

change1 : function(){
this.setState({status:true});
},


  render:function(){
    return(
      <table className="table table-fixed">
          <tbody>
            <tr>
              <td className="col-lg-4">{this.props.efrom}</td>
              <td className="col-lg-4">
                <a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}> {this.props.esubject}</a>
                {this.state.status?<Modalwindow1 a={this.props.efrom} b={this.props.esubject} c={this.props.edate} d={this.props.encodedBodyToChild}/>:null}
              </td>
              <td className="col-lg-4">{this.props.edate}</td>
            </tr>
          </tbody>
      </table>



        /*<div className="col-lg-12">
                <div className="col-lg-4">
                    {this.props.efrom}
                </div>
                <div className="col-lg-4" id="day">
                  <a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}> {this.props.esubject}</a>
                    {this.state.status?<Modalwindow1 a={this.props.efrom} b={this.props.esubject} c={this.props.edate} d={this.props.encodedBodyToChild}/>:null}
            		</div>
                <div className="col-lg-4">
                    {this.props.edate}
                </div>
            </div>*/


    );
  }
});
module.exports=MailComponent

var React = require('react');
/*var viewComponent = require('./viewComponent');
*/

var MailComponent = React.createClass({
  getInitialState : function(){
    return ({status:false});
  },

change1 : function(){
this.setState({status:true});
},
appendToIframe: function(message)

{

var iFrameNode = this.refs.myIframe,

frameDoc = iFrameNode.contentWindow.document;

frameDoc.write(message);

},

  render:function(){
    return(
      <div>

      <div className="col-lg-12">
          <div className="col-lg-4">
              {this.props.efrom}
          </div>
          <div className="col-lg-4"><a href="#myviewModal" onClick={this.change1} id="modal" data-toggle="modal">
          {this.props.esubject}</a>
          <div>
          <div className="modal fade" id="myviewModal">
              <div className="modal-dialog">
              <div className="modal-content">
                    <div className="modal-header">
                         <button className="close" data-dismiss="modal">x</button>
                                <h6 className="modal-title">To See the Message</h6>
                   </div>
                            <div className="modal-body">
                               <form className="form-horizontal">
                                     <div className="form-group">
                                         <div className="col-lg-2">
                                            FROM:
                                         </div>
                                         <div className="col-lg-10">
                                            {this.props.efrom}
                                         </div>
                                     </div>
                                     <div className="form-group">
                                         <div className="col-lg-2">
                                            SUBJECT:
                                         </div>
                                         <div className="col-lg-10">
                                            {this.props.esubject}
                                         </div>
                                     </div>
                                      <div className="form-group">
                                      </div>
                                      <div className="form-group">
                                         <div className="col-lg-10">
                                         <iframe id="iframe-message" ref="myIframe" >

                                         </iframe>
                                         </div>
                                       </div>

                               </form>
                          </div>
                          <div className="modal-footer">
                             <div className="pull-right">
                              <button className="btn btn-primary" type="submit" onClick={this.sendMessage}>send</button>
                              <button className="btn btn-danger" type="button" data-dismiss="modal">Close</button>
                             </div>
                           </div>
                  </div>
                </div>
              </div>

          </div>

{/*                <a href="#myviewModal" onClick={this.viewChange} id="modal" data-toggle="modal">{this.props.esubject}</a>
                {this.state.status? <viewComponent dfrom={this.props.efrom} dsubject={this.props.esubject} ddate={this.props.edate} dencodedBodyToChild={this.props.encodedBodyToChild}/>:null}
*/}

          </div>
          <div className="col-lg-4">
              {this.props.edate}
          </div>
      </div>



  {/*  <table className="table table-fixed">
        <tbody>
            <tr>
              <td className="col-lg-4"><a>{this.props.from}</a></td>
              <td className="col-lg-4">

              <a href="#myviewModal" onClick={this.viewChange} id="modal" data-toggle="modal">
              {this.props.subject}</a>{this.state.status?
                <viewComponent dfrom={this.props.from} dsubject={this.props.subject} ddate={this.props.date} dencodedBodyToChild={this.props.encodedBodyToChild}/>:null}
                </td>
              <td className="col-lg-4"><a>{this.props.date}</a></td>
            </tr>
          </tbody>
      </table>*/}
      </div>
    );
  },
  componentDidMount: function(){

  var encodedBody = this.props.encodedBodyToChild;
  encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');

  encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));

  this.appendToIframe(encodedBody);

  },


});
module.exports=MailComponent

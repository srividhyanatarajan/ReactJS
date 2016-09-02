var React = require('react');

var viewComponent = React.createClass({
  appendToIframe: function(message)

  {

  var iFrameNode = this.refs.myIframe,

  frameDoc = iFrameNode.contentWindow.document;

  frameDoc.write(message);

  },
  render : function(){
    return(
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
                                        {this.props.dfrom}
                                     </div>
                                 </div>
                                 <div className="form-group">
                                     <div className="col-lg-10">

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
    );

  },
  componentDidMount: function(){

var encodedBody = this.props.dencodedBodyToChild;
encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');

encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));

this.appendToIframe(encodedBody);

},
  componentDidMount: function(){

var encodedBody = this.props.dencodedBodyToChild;
encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');

encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));

this.appendToIframe(encodedBody);

},
});


module.exports = viewComponent;

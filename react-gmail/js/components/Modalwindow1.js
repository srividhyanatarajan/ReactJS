var React=require('react');
var Modalwindow1=React.createClass({
  appendToIframe: function(message)
  {
   var iFrameNode = this.refs.myIframe,
   frameDoc = iFrameNode.contentWindow.document;
   frameDoc.write(message);
  },

render:function(){

  return(
    <div>
    <div className="modal fade" id="myModal1">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h3>You are viewing mail</h3>
        <button className="close" data-dismiss="modal">x</button>

      </div>

      <div className="modal-body">

        <form  className="form-horizontal">
          <div className="form-group">
          <div className="col-lg-2">
            FROM :
          </div>
            <div className="col-lg-10">
              {this.props.a}
            </div>
          </div>
          <div className="form-group">
          <div className="col-lg-2">
            SUBJECT :
          </div>
            <div className="col-lg-10">
              {this.props.b}
            </div>
          </div>
          <iframe id="iframe-message" ref="myIframe" >
              </iframe>
        </form>

      </div>


      <div className="modal-footer">

        <button className="btn btn-default" type="button">reply</button>
      </div>
    </div>

    </div>
    </div>


    </div>
  );
},

componentDidMount: function(){
var encodedBody = this.props.d;

encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
this.appendToIframe(encodedBody);
},

});



module.exports=Modalwindow1

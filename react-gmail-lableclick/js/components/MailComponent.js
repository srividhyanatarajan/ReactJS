var React = require('react');
var ReacDom = require('react-dom');

console.log("Mail Component");
var MailComponent = React.createClass({
  render:function(){
    return(
      <div>

      <table className="table table-fixed">
        {/*  <thead>
              <tr>
                <th className="col-lg-4">FROM</th>
                <th className="col-lg-4">SUBJECT</th>
                <th className="col-lg-4">DATE</th>
              </tr>
          </thead>*/}
          
          <tbody>
            <tr>
              <td className="col-lg-4"><a>{this.props.from}</a></td>
              <td className="col-lg-4"><a>{this.props.subject}</a> </td>
              <td className="col-lg-4"><a>{this.props.date}</a></td>
            </tr>
          </tbody>
      </table>
      </div>
    )
  }
})
module.exports=MailComponent

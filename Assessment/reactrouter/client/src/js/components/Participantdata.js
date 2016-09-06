var React = require('react');


var Participantdata = React.createClass({


  render: function(){
        return (
          <div>

            <participantdata wavet={e.wave} namet={e.name} mailt={e.email} phonet={e.phone} giturlt={e.giturl} empcodet={e.empcode} empdeptt={e.empdept} empdesignt={e.empdesign} skillst={e.skills} expt={e.exp}/>

            
          <tbody className="col-lg-12">
            <tr>
              <td className="col-lg-2">{this.props.wavet}</td>
              <td className="col-lg-2">{this.props.namet}</td>
              <td className="col-lg-2">{this.props.emailt}</td>
              <td className="col-lg-2">{this.props.phonet}</td>
              <td className="col-lg-2">{this.props.giturlt}</td>
              <td className="col-lg-2">{this.props.empcodet}</td>
              <td className="col-lg-2">{this.props.empdeptt}</td>
              <td className="col-lg-2">{this.props.empdesignt}</td>
              <td className="col-lg-2">{this.props.skillsr}</td>
              <td className="col-lg-2">{this.props.expt}</td>
            </tr>
          </tbody>
          </div>
        )
      }
});
module.exports=Participantdata;

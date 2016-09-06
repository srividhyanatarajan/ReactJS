var React = require('react');
//var participantdata = require('./participantdata');
var ViewParticipant = React.createClass({



  render : function(){

      var mydispparticipantdata = this.props.allContent.map(function(e){
                return (

                  <tr>
                    <td className="col-lg-2">{e.wave}</td>
                    <td className="col-lg-2">{e.name}</td>
                    <td className="col-lg-2">{e.email}</td>
                    <td className="col-lg-2">{e.phone}</td>
                    <td className="col-lg-2">{e.giturl}</td>
                    <td className="col-lg-2">{e.empcode}</td>
                    <td className="col-lg-2">{e.empdept}</td>
                    <td className="col-lg-2">{e.empdesign}</td>
                    <td className="col-lg-2">{e.skills}</td>
                    <td className="col-lg-2">{e.exp}</td>
                  </tr>
                )
              });

      return (
        <div className="container">
        <div className="row">
        <h3>List Of participants</h3>
        <table className="table table-striped table-bordered">
            <thead className="col-lg-12">
              <tr>
                  <td className="col-lg-2 txtleft">WaveType</td>
                  <td className="col-lg-2 txtleft">Name</td>
                  <td className="col-lg-2 txtleft">Email</td>
                  <td className="col-lg-2 txtleft">Phone</td>
                  <td className="col-lg-2 txtleft">GitUrl</td>
                  <td className="col-lg-2 txtleft">EmpCode</td>
                  <td className="col-lg-2 txtleft">Emp Dept</td>
                  <td className="col-lg-2 txtleft">Emp Design</td>
                  <td className="col-lg-2 txtleft">Skills</td>
                  <td className="col-lg-2 txtleft">Experience</td>
              </tr>
            </thead>
            <tbody className="col-lg-12">
                {mydispparticipantdata}
            </tbody>

        </table>
      </div>
    </div>
      );

  }
});

module.exports=ViewParticipant;

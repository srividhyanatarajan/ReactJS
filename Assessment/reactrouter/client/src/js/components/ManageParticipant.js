var React = require('react');
var ViewParticipant = require('./ViewParticipant');
var loadedData = false;
var ManageParticipant = React.createClass({
  getInitialState: function()
     {
       return({allContent:[]});
     },
  getData: function(){
    $.ajax({
           url: 'http://localhost:8080/getparticipantdata',
           type: 'GET',
           dataType: 'json',
           contentType: "application/json",
           success: function(data)
           {
             this.setState({allContent:data});
             loadedData=true;
             console.log(data);
           }.bind(this),
           error: function(xhr, status, err) {
             console.error("Error.."+err.toString());
           }.bind(this)
         });
  },
  render : function(){
    var bottomtable;

      if(this.state.allContent.length != 0){
        console.log("inside if....");
      bottomtable = <ViewParticipant allContent={this.state.allContent} />
    }
    else { console.log("loadedData 0 ...."+loadedData);}
    return (
      <div className="container">
          <div className="row" className="rowtop">
                <div className="col-md-12">
                    <form className="form-horizontal" method="post" role="form" action="http://localhost:8080/postparticipantdata">
                          <div className="form-group">
                              <label for="wavelab" className="col-sm-2 control-label">
                                Wave:
                              </label>
                              <div className="col-sm-10">
                              <select name="wave" className="form-control">
                                <option value="wave1">Wave 1</option>
                                <option value="wave2">Wave 2</option>
                                <option value="wave3">Wave 3</option>
                                <option value="wave4">Wave 4</option>
                              </select>

                              </div>
                          </div>
                          <div className="form-group">
                              <label for="namelab" className="col-sm-2 control-label">
                                Name:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="name" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="emaillab" className="col-sm-2 control-label">
                                Email:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="email" type="email" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="phonelab" className="col-sm-2 control-label">
                                Phone:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="phone" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="giturllab" className="col-sm-2 control-label">
                                Git Url:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="giturl" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="empcodelab" className="col-sm-2 control-label">
                                Emp Code:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="empcode" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="empdeptlab" className="col-sm-2 control-label">
                                Emp Dept:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="empdept" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="empdesignlab" className="col-sm-2 control-label">
                                Emp Design:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="empdesign" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="skillslab" className="col-sm-2 control-label">
                                Skills:
                              </label>
                              <div className="col-sm-10">
                                <textarea className="form-control" name="skills" type="text" />
                              </div>
                          </div>
                          <div className="form-group">
                              <label for="explab" className="col-sm-2 control-label">
                                Experience:
                              </label>
                              <div className="col-sm-10">
                                <input className="form-control" name="exp" type="text" />
                              </div>
                          </div>


                          <div className="form-group" className="pull-right">
                          <div className="col-sm-offset-2 col-sm-10">

                            <button type="submit" value="submit" onClick={this.getData} className="btn btn-default">
                                  Submit
                            </button>
                          </div>
                          </div>
                </form>
              </div>
              <div>{bottomtable}</div>
            </div>
      </div>
    );
  }
});

module.exports=ManageParticipant;

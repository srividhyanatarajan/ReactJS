var React = require('react');
var ReactDom = require('react-dom');
var Label = require('./labelComponent');
var ComposeComponent = require('./ComposeComponent');
var LeftPanelComponent = React.createClass({

  handleClick:function(labelId){
    console.log("clicked handle event :::");
    this.props.getEmailByLabel(labelId);
  },
    render: function(){
                        var llabel=this.props.allLabelsData.map(function(e){
                              return (
                                <div>
                                  <Label id={e.id} name={e.name} handleClick={this.handleClick}/>
                                </div>
                              )
                          },this);
                         return (
                            <div className="list-group">
                                      <ComposeComponent>Compose Mail</ComposeComponent>
                                      {llabel}

                            </div>
                          );
                      }
  });


module.exports=LeftPanelComponent

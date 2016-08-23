var React = require('react');
var ReactDom = require('react-dom');
var Label = require('./labelComponent');

var LeftPanelComponent = React.createClass({

    render: function(){
                        var llabel=this.props.allLabelsData.map(function(e){
                              return (
                                  <Label id={e.id} name={e.name}/>
                              )
                          })
                         return (
                            <div className="list-group">
                                    {llabel}
                            </div>
                                )
                      }
  });


module.exports=LeftPanelComponent

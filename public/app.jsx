// var React = require('react');
// var ReactDOM = require('react-dom');

// GreeterMessage - Presentational Component
var GreeterMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

// GreeterForm - Presentational Component
var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};
    updates.name = name;
    updates.message = message;
    if(typeof name === 'string' && name.length > 0){
      this.refs.name.value = '';
      this.refs.message.value = '';
      this.props.onNewData(updates);
    }else{
      alert('Name\'s empty');
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="name"></input>
        <br/>
        <textarea ref="message" rows="4" cols="50" placeholder="Write a message"></textarea>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

// Greeter - Container Component
var Greeter = React.createClass({
  getDefaultProps:function(){
    return {
      name: 'Mick',
      message: 'This is from a component'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.state.message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

// Renders Greeter to the app
ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
  );

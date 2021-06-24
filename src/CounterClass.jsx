import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props){
    super(props)
    this.state={count:0}
  }
handleincreasecount=(e)=>{
  e.preventDefault();
this.setState({count:this.state.count +1})
}
handledecreasecount=(e)=>{
  e.preventDefault();
this.setState({count:this.state.count -1})
}
  render() {
    return (
      <div>
        <h1>Counter:{this.state.count}</h1>
        <hr/>
       <button onClick={this.handleincreasecount}>Increase</button>
       <button onClick={this.handledecreasecount}>Decrease</button>
      </div>
    );
  }
}

export default CounterClass;

import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props){
        super(props)

        this.state ={
            count : 0
        }
    }



    Increment(){
        this.setState({
            count : this.state.count +1
        },()=>{console.log("call back fun",this.state.count)
    });
        console.log("",this.state.count)
    }

    
    Dicrement(){
        this.setState({
            count : this.state.count -1

        })
        console.log(this.state.count)
    }

    
  render() {
    return (
      <div>
        <div>Counter = {this.state.count}</div>
        <button onClick={()=>{this.Increment()}}>Increment</button>
        <button onClick={()=>{this.Dicrement()}}>Dicrement</button>
      </div>
    )
  }
}

export default Counter
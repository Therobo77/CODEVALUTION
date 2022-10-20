import React,{Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Massege From Message.js!'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for Subscribing Love From message.js'
        })
    }
    render(){
        return(
            <div>
                {/* <h1>Welcome Massege From Message.js </h1> */}
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
            </div>
        )
    }
}


export default Message;
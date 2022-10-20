import React from 'react'

// function Greet(){
//     return <div>
//         <input placeholder='Write your Name' />
//         <h1>hello vikash</h1>
//         <h2>How are you</h2>
//         <div>ab sab hoga do not worry</div>
//     </div>
// }


const Greet =(props)=>{
    console.log(props);
    return (
    <div>
    <input placeholder='Write your Name' />
    <h1>Hello {props.name},You are a Great {props.work}</h1>
    <h2>How are you</h2>
    <div>ab sab hoga do not worry</div>
    </div>
    )
}
export default Greet;
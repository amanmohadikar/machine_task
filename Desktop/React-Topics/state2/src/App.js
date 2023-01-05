import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 0
    }
  }


  Increment() {
    this.setState({
      message: this.state.message + 1
    })
  }

  Decrement() {
    this.setState({
      message: this.state.message - 1
    })
  }



  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => { this.Increment() }}>Increment</button>
        <button onClick={() => { this.Decrement() }}>Decrement</button>

      </div>
    )
  }
}


export default App;



// import React from "react"



// class Clascomponent extends React.Component{
// constructor(){
//     super()
//     console.log("hello constructer")
//     this.state={
//         a:2
//     }
//     this.update()
// }
// update(){
//     setInterval(()=>{
//        this.setState({a:this.state.a+1})
//     },1000)
// }

//     render(){
//       return <div>
//         <h1>{this.props.greet} I am class component and a child of time component </h1>
//         <p>value - {this.state.a}</p>
//    </div> }
//   }
// export default Clascomponent

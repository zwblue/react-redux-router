import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        addTodoList:[]
      }
    }
  componentDidMount(){
    this.setState({addTodoList:this.props.todos()})
  }
  addTodoClick = (val) =>{
    console.log(val)
    this.props.addTodo('val')
    console.log(33333,this.props.todos())
    this.setState({addTodoList:this.props.todos()})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>this.addTodoClick('哈哈Hello'+this.state.addTodoList.id)}>click ++</button>
        <div className='list-box'>
          {this.state.addTodoList.map((ele) =>{
            return (
                <div key={ele.id}>
                  <div>用户ID：{ele.id}</div>
                  <div>用户名：{ele.text}</div> 
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

// (state)=>{ return state },{addTodo}
export default App;

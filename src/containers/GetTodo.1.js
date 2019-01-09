import { connect } from 'react-redux'
import App from '../App'
import { addTodo } from '../actions/index'
const mapStateToProps = (state,store) => {
  console.log(222,state);
  return {
    todos: ()=> {
      return state.todos
    },
    doList: ()=> {
      return state.doList
    }
  }
}
const mapDispatchToProps = dispatch => {
  console.log(1111,dispatch)
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}
export default connect(
  (state,store) => {
    console.log(222,state);
    return {
      todos: ()=> {
        return state.todos
      }
    }
  },
  dispatch => {
    console.log(1111,dispatch)
    return {
      addTodo: text => dispatch(addTodo(text))
    }
  }
)(App)
import { connect } from 'react-redux'
import App from '../App'
import { addTodo } from '../actions/index'
const mapStateToProps = (state,store) => {
  console.log(222,state);
  return {
    todos: ()=> {
      return state.todos
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
  mapStateToProps,
  mapDispatchToProps
)(App)
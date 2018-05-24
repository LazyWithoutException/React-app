import React, { Component } from 'react'
import {connect} from "react-redux"
import TodoList from './todo_list'
import {addTodoItem} from '../store/actions/index'
import { bindActionCreators } from 'redux';


 class AddTodoItems extends Component {
   constructor(){
     super();
     this.state={
       title:' '
     }
     
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }
  render() {
    return (
    <div>
     {this.renderFrom()}
     <div>
     <TodoList 
         store={this.props.store}>
      </TodoList>
     </div>
     </div>
    )
  }

componentWillMount(){
    this.renderFrom=this.renderFrom.bind(this)
}
onSubmit(e){
  e.preventDefault()
}
onChange(e){
  this.setState({
    title:e.target.value
  })
}

  renderFrom(){
    console.log('----')
    console.log(this.props.todo)
    return(
      <div>
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={this.onSubmit}>
                <input
                 type='text'
                 name="title"
                 value={this.state.title}
                 onChange={this.onChange}
                ></input>
                <br />
                <button onClick={()=>this.props.addTodoItem([...this.props.todo,{task:this.state.title}])} type="submit">Add</button>
            </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps =(state) => ({
todo:state.addTodo
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodoItem }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTodoItems)
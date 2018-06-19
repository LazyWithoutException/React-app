import React, { Component } from 'react'
import TodoItem from './todo_item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class TodoList extends Component {

  render() {
    return (
      <div>
      <div >  
        
          {this.listTask()}
      </div>
      </div>
    )
  }

  componentWillMount(){
    this.listTask=this.listTask.bind(this);
  }
  listTask(){
    console.log("-------list taks--------")
    return( this.props.tasks.map((task,index)=>{
      return(   
      <TodoItem
        id={task.id}
        task={task.task}
        store={this.props.store}
        checked={task.checked}
      >
      </TodoItem>)
    }))
  }

}

const mapStateToProps =(state) => ({
  tasks: state.taskReducerTodo
});
export default connect(mapStateToProps)(TodoList)


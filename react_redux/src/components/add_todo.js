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
   
     </div>
     </div>
    )
  }

componentWillMount(){
   // this.renderFrom=this.renderFrom.bind(this)
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
    return(
        <div className="row">
        <div id="dodaj">
            <form onSubmit={this.onSubmit}>
                <input
                 type='text'
                 value={this.state.title}
                 onChange={this.onChange}
                ></input>
                <button  className="btn btn-primary btn-sm" onClick={()=>this.props.addTodoItem({task:this.state.title})} type="submit">Add</button>
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
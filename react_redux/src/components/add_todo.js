import React, { Component } from 'react'
import {connect} from "react-redux"
import TodoList from './todo_list'
import {addTodoItem} from '../store/actions/index'
import { bindActionCreators } from 'redux';
var uniqid = require('uniqid');


 class AddTodoItems extends Component {
   constructor(){
     super();
     this.state={
       title:' '
     }
   }
  render() {
    return (
    <div>
     {this.renderFrom()}
     </div>
    )
  }

componentWillMount(){
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.onClick=this.onClick.bind(this);
}
onSubmit(e){
  e.preventDefault()
}
onChange(e){
  this.setState({
    title:e.target.value
  })
}
onClick(){
console.log(uniqid())
//onClick={()=>this.props.addTodoItem({task:this.state.title})}
this.props.addTodoItem({
  id:uniqid(),
  task:this.state.title,
  date:this.props.store.getState().tempDate.date,
  checked:false,
  kljuc:"iz sesije"
})
this.setState({
  title:""
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
               <button onClick={this.onClick} className="btn btn-primary btn-sm"  type="submit">Add</button>
            </form>
        </div>
        </div>
    )
  }
}
const mapStateToProps =(state) => ({
todo:state.taskReducerTodo
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodoItem }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTodoItems)
import React,{Component} from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {strikeItem, addTodoItem} from '../store/actions/index'

class TodoItem extends Component{
    render(){
        return( 
            <div>
            <p>{this.props.task}</p>
            <button onClick={()=>this.props.addTodoItem()}>Delete</button>
            <button onClick={() => this.props.strikeItem()} >Done</button>
            <button>X</button>
            </div>
    )}
}
const mapStateToProps =(state) => ({
    //todo: state.activeToDo,
   // addtodo:state.todo
  });

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ strikeItem,addTodoItem }, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)
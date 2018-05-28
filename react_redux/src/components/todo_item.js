import React,{Component} from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {strikeItem, addTodoItem,deleteTodoItem} from '../store/actions/index'

class TodoItem extends Component{
  
    render(){
        return( 
            <div className="card">
                <div className="row">
                <div className="card-body">
                   <p >{this.checkParagraphStrike(this.props.checked)}</p>
                </div>
                <div id="dugmici" >
                <div className="card-body" >
            <button type="button" className="btn btn-primary btn-sm"onClick={() => this.props.strikeItem(this.props.task)} >Done</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.deleteTodoItem(this.props.task)}>x</button>
                </div>
                </div>
                </div>
            </div>        
    )}
    checkParagraphStrike(val){
        if(val)
        return(
            <strike><p>{this.props.task}</p></strike>
        )
        else
        return(
            <p>{this.props.task}</p>
        )
    }
}

const mapStateToProps =(state) => ({
    todo: state.addTodo,
  });

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ strikeItem,addTodoItem,deleteTodoItem }, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)
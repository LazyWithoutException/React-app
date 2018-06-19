import React,{Component} from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {strikeItem, addTodoItem,deleteTodoItem} from '../store/actions/index'

class TodoItem extends Component{
    render(){
        console.log("................")
        console.log(this.props.store.getState());
        console.log(this.props)
        return( 
            <div className="card">
                <div className="row">
                <div className="card-body">
                   {this.checkParagraphStrike(this.props.checked)}
                </div>
                <div id="dugmici" >
                <div className="card-body" >
            <button  type="button" className="btn btn-primary btn-sm"onClick={() => this.props.strikeItem(
                {id:this.props.id ,name:this.props.task,date:this.props.store.getState().tempDate.date,checked:true,kljuc:"iz sesije"})}
                >Done</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.deleteTodoItem(
                 {id:this.props.id})}
                 >x</button>
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
    todo: state.taskReducerTodo,
  });

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ strikeItem,addTodoItem,deleteTodoItem }, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)
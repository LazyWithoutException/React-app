import React, { Component } from 'react'
import AddTodoItems from './add_todo'
import List from './todo_list'
import Footer from './todo_footer'
import TimePicker from './date_picker'
import NavBar from './navbar' 
import {fetchDataAction,dateAction} from '../store/actions/index'
export default class Todo extends Component {
  
  componentDidMount(){
    let c=new Date();
    let datum=c.getMonth()+1+"/"+c.getDate()+"/"+c.getFullYear()
    console.log(datum)
    this.props.store.dispatch(dateAction(datum))
    this.props.store.dispatch(fetchDataAction(datum))
    console.log(this.props.store.getState())

  }
  render() {
    return (
      <div >
      <NavBar>
      </NavBar>
      <div id="todo">
          <div className="row">
              <div className="col-3">
                 <TimePicker
                 store={this.props.store}
                 >
                 </TimePicker>
              </div>
              <div className="col-8">
                   <AddTodoItems
                   store={this.props.store}
                   >
                   </AddTodoItems>
                  <List  
                  store={this.props.store}
                   >
                  </List>
                 <Footer>
                </Footer>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

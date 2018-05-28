import React, { Component } from 'react'
import AddTodoItems from './add_todo'
import List from './todo_list'
import Footer from './todo_footer'
import TimePicker from './date_picker'
import NavBar from './navbar' 

export default class Todo extends Component {
  render() {
    return (
      <div >
      <NavBar>
      </NavBar>
      <div id="todo">
          <div className="row">
              <div className="col-3">
                 <TimePicker>
                 </TimePicker>
              </div>
              <div className="col-8">
                   <AddTodoItems
                        >
                   </AddTodoItems>
                  <List
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

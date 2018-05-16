import React, { Component } from 'react';
import './App.css';
import Dugme from './components/button';  //defaultni
import ListaDugme from './components/buttons-list';  //defaultni
import Posts from './components/posts';
import PostForm from './components/postform'

class App extends Component {
  constructor(){
    super();
    this.state={
      niz:[
        {name:'ime',list:'list'}
      ],
      paramOne:'jedan',
      parmTwo:'dva'
    }
  }
  handleAddNewProject(project){
    let niz=this.state.niz;
    niz.push(project);
    console.log(niz)
    this.setState({
      niz:niz
    })
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        <ListaDugme></ListaDugme>
        <PostForm
         paramOne={this.state.paramOne}
         addNewProject={this.handleAddNewProject.bind(this)}
        >
        </PostForm>
        <hr/>
        <Posts></Posts>
        </p>
      </div>
    );
  }
}

export default App;






import React, { Component } from 'react'

 class PostForm extends Component {
   constructor(){
     super();
     this.state={
       in:'',
       objekat:{
         naslov:'',
         prosledjeno:''
       },
       niz:['c++','javascript','microC'],
       newProject:{
         name:'',
         list:''
       }
     }
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
   }
   handleSubmit(e){
      e.preventDefault();
      if(this.state.in==='')
      alert(this.props.paramOne)
      else{
       this.setState({
         newProject:{
           name:this.refs.name.value,
           list:this.refs.category.value
         }
       },function(){
        this.props.addNewProject(this.state.newProject) //SALJEMO NA KOMPONENTU IZNAD
       }) 
      }
   }
   handleChange(e){
    e.preventDefault();
    this.setState({
      in:e.target.value
    })
   }
  render() {
      let opcije=this.state.niz.map(val=>{
      return  <option key={val} value={val}>{val}</option>
      }); 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <input ref="name" type="text" value={this.state.in} onChange={this.handleChange} />
        </label>
        
        <select ref='category' >
          {opcije}
        </select>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default PostForm;

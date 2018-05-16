import React, {Component} from 'react';
import Button from './button';

export  default class ButtonList extends Component // mora default ??
{
    constructor(){
        super();
        this.state={
            selected:0,
            buttons:["one","two","thre","ffour"],
            nesto:"nesto"
       }
    }
    onButtonClicked(i){
        this.setState({ selected:i})
    }
    render(){
        return(
            <div>
                 {this.state.buttons.map((title,index)=>(
                 <Button
                  key={index}
                  naslov={title}
                  selected={ this.state.selected===index}
                  kliknuto={()=>this.onButtonClicked(index)}
                  />
                  ))}
            </div>
        )
    }
}
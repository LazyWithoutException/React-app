import React, {Component} from 'react';

export  default class MyButton extends Component // mora default ??
{
    render(){
        console.log(this.props);
        return(
            <button
             className={this.props.selected ? "selected": ""}
             onClick={this.props.kliknuto}
             key={this.props.key}
             >
             {this.props.naslov }</button>
        )
    }
}
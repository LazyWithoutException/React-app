import React, {Component} from 'react';

export  default class Posts extends Component // mora default ??
{
    constructor(){
        super();
        this.state={
            posts:[]
           }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data=>data.json())
        .then(data=>this.setState({posts:data}))
    }
    render(){
        const lista=this.state.posts.map(value=>(
            <div key={value.id}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
            </div>
        ));
        return(
            <div>
                {lista}
            </div>
        )
    }
}
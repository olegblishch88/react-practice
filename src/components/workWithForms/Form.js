import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : true
        }
    }
    changeText = (event) => {
        this.setState({text :2018 - event.target.value })
    }
    render(){
        return(
            <div>
            <input onChange={this.changeText} />
            <p>{this.state.text}</p>  
            </div>
        )
    }
}
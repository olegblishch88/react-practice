import React from 'react';

export default class dynamicText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : true
        }
    }
    changeText = (event) => {
        this.setState({text : event.target.value.toUpperCase() })
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
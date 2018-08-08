import React from 'react';

export default class Submit extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : ''}
    }
    handleChange = (event) => {
        this.setState({value : event.target.value})
        console.log(this.state.value)
    }
    handleSubmit = (event) => {
      event.preventDefault();
    }
    render(){
      
        return(
            <div>
            <input type="text" onChange={this.handleChange}/>
            <button onSubmit={this.handleSubmit}>Send</button>
            <p>{}</p>
            </div>
        )
    }
}
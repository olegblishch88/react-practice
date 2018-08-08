import React from 'react';

export default class FIO extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : true,
            surname : true,
            fathersName : true
        }
    }
    changeName = (event) => {
        this.setState({name : event.target.value});
        this.setState({surname : event.target.value});
    }
   
    render(){
        return(
            <div>
            <input onChange={this.changeName} />
            <p>{this.state.name}</p>  
            <p>{this.state.surname}</p>  
            <p>{this.state.fathersName}</p>  
            </div>
        )
    }
}
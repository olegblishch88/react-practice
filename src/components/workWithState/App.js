import React from 'react';

export default class App extends React.Component{
   constructor(props){
       super(props);
       this.state = {
          name : "Ivan",
          age : 25,
          show : false
        };
       }
   showMessage = () => {
    this.setState({show : !this.state.show});
    }
     render() {
        let txt;
        if(this.state.show){
            txt = this.state.name + this.state.age
        }
     return(
        <div>
            {txt}
            <button onClick={this.showMessage}>
            {this.state.show ? 'Скрыть' : 'Показать'}
            </button>
        </div>
        )
	}
}
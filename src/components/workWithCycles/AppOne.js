import React from 'react';

export default class AppOne extends React.Component {
	constructor() {
		super();
		this.state = {items: [], value: ''};
	}

	addItem(event) {
		this.state.items.push(this.state.value);
		this.setState({items: this.state.items});
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		const list = this.state.items.map((item, index) => {
			return <p key={index}>{item}</p>;
		});

		
		return (
			<div>
				<form onSubmit={this.addItem.bind(this)}>
					<input
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
					/>
					<input type="submit" />
				</form>
                {list}
			</div>
		);
	}
}
	

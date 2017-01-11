import React from 'react';
import {connect} from 'react-redux';
import AddItemForm from './addItemForm';
import ListItems from './listitems';

class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			items: []
		}
	}

	testfunc() {
		console.log("here");
	}

	addItem(item) {
		this.state.items.push(item);
		console.log('after add state is now:', this.state.items);
		return this.setState({ items: this.state.items })
	}

	removeItem(item) {
		console.log("remove called");
		var i = this.state.items.indexOf(item);
		if(i != -1) {
			array.splice(i, 1);
		}
		console.log('after delete state is now:', this.state.items);
		return this.setState({ items: this.state.items })
	}

	render() {
		return <div>
			<h1>my to-do list</h1>
			<button onClick={this.testfunc}>click me</button>
			<AddItemForm addItem={this.addItem.bind(this)}/>
			<ListItems removeItem={this.removeItem.bind(this)} items={this.state.items}/>
			<div>

			</div>

		</div>;
	}
}

module.exports = Home;

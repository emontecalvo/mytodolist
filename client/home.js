import React from 'react';
import {connect} from 'react-redux';
import AddItemForm from './addItemForm';
import ListItems from './listitems';
import EditItemForm from './editItemForm';

class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			items: []
		}
	}

	addItem(item) {
		this.state.items.push(item);
		console.log('after add state is now:', this.state.items);
		return this.setState({ items: this.state.items })
	}

	removeItem(item) {
		var i = this.state.items.indexOf(item);
		if(i !== -1) {
			this.state.items.splice(i, 1);
		}
		console.log('after delete state is now:', this.state.items);
		return this.setState({ items: this.state.items })
	}

	editItem(item) {
		var i = this.state.items.indexOf(item);
		if(i !== -1) {
			return (<EditItemForm />);
		}
	}

	render() {
		return <div>
			<h1>my to-do list</h1>
			<AddItemForm addItem={this.addItem.bind(this)}/>
			<ListItems
				removeItem={this.removeItem.bind(this)}
				editItem={this.editItem.bind(this)}
				items={this.state.items}
			/>
			<div>

			</div>

		</div>;
	}
}

module.exports = Home;

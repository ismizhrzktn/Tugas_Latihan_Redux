import React, { Component } from 'react';
import { View } from 'react-native';
import { actionCreators } from './redux/ReminderList';
import List from './components/List';
import Input from './components/Input';
import Title from './components/Title';

export default class Todo extends Component {
	constructor(props) {
		super(props);
	}
	state = {}

	componentWillMount() {
		const { store } = this.props;
		const { todos } = store.getState();
		this.setState({ todos });
		this.unsubscribe = store.subscribe(() => {
			const { todos } = store.getState();
			this.setState({ todos });
		})
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onAddTodo = (text) => {
		const { store } = this.props;

		store.dispatch(actionCreators.add(text));
	}

	onRemoveTodo = (index) => {
		const { store } = this.props;

		store.dispatch(actionCreators.remove(index));
	}

	render() {
		const { todos } = this.state;

		return (
			<View>
				<Title>
					Reminder List 
        </Title>
				<Input
					placeholder={'Tambah List'}
					onSubmitEditing={this.onAddTodo}
				/>
				<List
					list={todos}
					onPressItem={this.onRemoveTodo}
				/>
			</View>
		)
	}
}

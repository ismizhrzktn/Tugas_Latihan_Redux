import { createStore } from 'redux';
import React, { Component } from 'react';
import { View } from 'react-native';
import { reducer } from './redux/ReminderList';
const store = createStore(reducer);
import List from './List';

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'skyblue', 	alignItems: 'center',	justifyContent: 'center' }}>
				<List  store={store} />
			</View>
		);
	}
}

export const types = {
	ADD: 'ADD',
	REMOVE: 'REMOVE',
  
}


export const actionCreators = {
	add: (item) => {
		return { type: types.ADD, payload: item }
	},
	remove: (index) => {
		return { type: types.REMOVE, payload: index }
	}
}

// Store
const initialState = {
	todos: ['Click to remove', 'Belajar Redux', 'Sholat', 'Ngaji'],
}

export const reducer = (state = initialState, action) => {
	const { todos } = state
	const { type, payload } = action

	switch (type) {
		case types.ADD: {
			return {
				...state,
				todos: [payload, ...todos],
			}
		}
		case types.REMOVE: {
			return {
				...state,
				todos: todos.filter((todo, i) => i !== payload),
			}
		}
	}

	return state
}
// import Immutable from 'immutable'

import StorageConstants from '../constants/StorageConstants.js'

// CommonActions = Immutable.Map({
// export default Map = (state = new Immutable.Map(), action) => {

const ACTIONS = {
	INIT (state, action) {
	// [StorageConstants.INIT] (state, action) {
		console.log('init!!!')
		return state
	},
	[StorageConstants.SET_MAP_SIZE] (state, action) {
		console.log('SET_MAP_SIZE!!!')
		return state
	}
}

const MESSAGE = {
	UNKNOWN_ACTION_TYPE: 'UNKNOWN_ACTION_TYPE'
}

function processAction (state, action) {
	// if (!ACTIONS || !action.type || !ACTIONS[action.type]) throw new Error(MESSAGE.UNKNOWN_ACTION_TYPE)
	if (!ACTIONS || !action.type || !ACTIONS[action.type]) return state
	console.log('processAction')
	console.log(ACTIONS)
	console.log(action.type)
	console.log(ACTIONS[action.type])
	console.log('processAction')
	return ACTIONS[action.type](state, action)
}

export default Map = (state = {}, action) => {
// export default Map = (state, action) => {
	if(!action || !action.type) return state

	return processAction(state, action)
}
// })

// import type { Todos, Todo, Id, Text } from '../types/todos'
// import type { Action } from '../types'
//
// const createTodo = (id: Id, text:) => ({
// 	id,
// 	text,
// 	completed: false
// });
//
// const toggleTodo = (todos, id) =>
// 	todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));
//
// const todos = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_TODO':
// 			return [...state, createTodo(action.id, action.text)];
// 		case 'TOGGLE_TODO':
// 			return toggleTodo(state, action.id);
// 		default:
// 			return state;
// 	}
// };
//
// export default todos;
// import Immutable from 'immutable'

import StorageConstants from '../constants/StorageConstants.js'

// CommonActions = Immutable.Map({
// export default Map = (state = new Immutable.Map(), action) => {
export default Map = (state = {}, action) => {
// export default Map = (state, action) => {

	console.log('state')
	console.log(state)
	console.log('state')

	console.log('action')
	console.log(action)
	console.log('action')

	switch (action.type) {
		case StorageConstants.SET_MAP_SIZE:
			// state = state.set('mapSize', 10)
			// break

			return [
				...state,
				{
					mapSize: 10
				}
			]

		default:
			return state
	}
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
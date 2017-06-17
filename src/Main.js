import Map from './constructors/Map.js'
import Cruiser from './constructors/Cruiser.js'

//TODO (S.Panfilov) add separate initializations for the game and for the rest of the project
import {createStore} from 'redux'

function redux() {
	function counter(state = 0, action) {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1
			case 'DECREMENT':
				return state - 1
			default:
				return state
		}
	}

	let store = createStore(counter)

	store.subscribe(() =>
		console.log(store.getState())
	)

	store.dispatch({type: 'INCREMENT'}) // 1
	store.dispatch({type: 'INCREMENT'}) // 2
	store.dispatch({type: 'DECREMENT'}) // 1
}

export default {
	init () {
		const Map = new Map()
		console.info(Map)
		const Cruiser = new Cruiser()
		//TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
		console.info(Cruiser)
	},
	redux: redux,
	some () {
		console.log('some!!')
	}
}
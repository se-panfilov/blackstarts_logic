import Immutable from 'immutable'

import StorageConstants from '../constants/StorageConstants.js'

// CommonActions = Immutable.Map({
// export default Map = (state = new Immutable.Map(), action) => {
export default Map = (state, action) => {

	console.log(state)
	console.log(action)

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
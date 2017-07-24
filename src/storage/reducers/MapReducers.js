import Immutable from 'immutable'
import ActionsConstants from '../constants/ActionsConstants'
import StorageItemsConstants from '../constants/StorageItemsConstants'
import MapConstructor from '../../constructors/Map.js'

const ACTIONS = {
	[ActionsConstants.CREATE_MAP] (state, action) {
		const width = action.data.get('width')
		const height = action.data.get('height')
		const data = new MapConstructor(width, height)
		return state.set(StorageItemsConstants.MAP, data)
	}
}

const MESSAGE = {
	UNKNOWN_ACTION_TYPE: 'UNKNOWN_ACTION_TYPE'
}

function processAction (state = new Immutable.Map(), action) {
	// if (!ACTIONS || !action.type || !ACTIONS[action.type]) throw new Error(MESSAGE.UNKNOWN_ACTION_TYPE)
	if (!ACTIONS || !action.type || !ACTIONS[action.type]) return state
	return ACTIONS[action.type](state, action)
}

export default Map = (state = new Immutable.Map(), action) => {
	if (!action || !action.type) return state
	return processAction(state, action)
}
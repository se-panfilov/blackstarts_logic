import Immutable from 'immutable'
import ActionsConstants from '../constants/ActionsConstants'
import StorageItemsConstants from '../constants/StorageItemsConstants'
import Cruiser from '../../constructors/Cruiser.js'

const ACTIONS = {
	[ActionsConstants.CREATE_CRUISER] (state, action): Immutable.Map {
		const data = new Cruiser(action.data)
		return state.set(StorageItemsConstants.CRUISER, data)
	}
}

const MESSAGE = {
	UNKNOWN_ACTION_TYPE: 'UNKNOWN_ACTION_TYPE'
}

function processAction (state = new Immutable.Map(), action):  Immutable.Map {
	// if (!ACTIONS || !action.type || !ACTIONS[action.type]) throw new Error(MESSAGE.UNKNOWN_ACTION_TYPE)
	if (!ACTIONS || !action.type || !ACTIONS[action.type]) return state
	return ACTIONS[action.type](state, action)
}

export default Map = (state = new Immutable.Map(), action): Immutable.Map => {
	if (!action || !action.type) return state
	return processAction(state, action)
}
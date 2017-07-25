import Immutable from 'immutable'
import StorageUtils from '../../StorageUtils'
import MapActions from './MapActions'

export default function (state = new Immutable.Map(), action): Immutable.Map {
	if (!action || !action.type) return state
	action = Immutable.fromJS(action)
	return StorageUtils.processAction(MapActions, state, action)
}
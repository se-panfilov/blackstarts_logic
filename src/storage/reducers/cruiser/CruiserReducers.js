import Immutable from 'immutable'
import StorageUtils from '../../StorageUtils'
import CruiserActions from './CruiserActions'

export default function (state = new Immutable.Map(), action): Immutable.Map {
	if (!action || !action.type) return state
	action = Immutable.fromJS(action)
	return StorageUtils.processAction(CruiserActions, state, action)
}
import Immutable from 'immutable'
import ActionsConstants from '../../constants/ActionsConstants'
import StorageItemsConstants from '../../constants/StorageItemsConstants'
import Cruiser from '../../../constructors/Cruiser.js'

export default {
	[ActionsConstants.CREATE_CRUISER] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
		const data = new Cruiser(action.get('data'))
		return state.set(StorageItemsConstants.CRUISER, data)
	}
}
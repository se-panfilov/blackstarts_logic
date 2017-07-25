import Immutable from 'immutable'
import ActionsConstants from '../../constants/ActionsConstants'
import StorageItemsConstants from '../../constants/StorageItemsConstants'
import MapConstructor from '../../../constructors/Map'

export default {
	[ActionsConstants.CREATE_MAP] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
		const width = action.getIn(['data', 'width'])
		const height = action.getIn(['data', 'height'])
		const data = new MapConstructor(width, height)
		return state.set(StorageItemsConstants.MAP, data)
	}
}
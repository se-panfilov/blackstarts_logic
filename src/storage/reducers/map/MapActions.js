// @flow

import Immutable from 'immutable'
import {CREATE_MAP} from '../../constants/ActionsConstants'
import {MAP} from '../../constants/StorageItemsConstants'
import MapConstructor from '../../../constructors/Map'

export default {
	[CREATE_MAP] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
		const width = action.getIn(['data', 'width'])
		const height = action.getIn(['data', 'height'])
		const data = new MapConstructor(width, height)
		return state.set(MAP, data)
	}
}
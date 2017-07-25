// @flow

import Immutable from 'immutable'
import {CREATE_CRUISER} from '../../constants/ActionsConstants'
import {CRUISER} from '../../constants/StorageItemsConstants'
import Cruiser from '../../../constructors/Cruiser.js'

export default {
	[CREATE_CRUISER] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
		const data = new Cruiser(action.get('data'))
		return state.set(CRUISER, data)
	}
}
import Immutable from 'immutable'

import StorageConstants from '../../constants/StorageConstants.js'

CommonActions = Immutable.Map({

	Map (state, action) {
		if (!state) {
			state = new Immutable.Map()
		}

		const actionType = !action ? action.type : undefined

		switch (actionType) {
			case StorageConstants.SET_MAP_SIZE:
				state = state.set('contactFormStatus', 'loading')
				break
		}

		return state
	}
})
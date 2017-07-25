import Immutable from 'immutable'
import StorageInitializer from './StorageInitializer.js'
import ActionsConstants from './storage/constants/ActionsConstants.js'

export default {
	init () {
		const store = StorageInitializer.init()
		const width = 100
		const height = 200
		store.dispatch({type: ActionsConstants.CREATE_MAP, data: new Immutable.Map({width, height})})
		store.dispatch({type: ActionsConstants.CREATE_CRUISER, data: new Immutable.Map()})
		console.log(store.getState())

		// const map = new Map(width, height)

		// const cruiser = new Cruiser()
		//TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
	}
}
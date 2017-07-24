import Map from './constructors/Map.js'
import Cruiser from './constructors/Cruiser.js'
import StorageInitializer from './StorageInitializer.js'

export default {
	init () {
		const store = StorageInitializer.init()
		// console.log(store)
		store.dispatch({ type: 'SET_MAP_SIZE' })

		const map = new Map()
		// console.info(Map)

		const cruiser = new Cruiser()
		//TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
		console.info(cruiser)
	}
}
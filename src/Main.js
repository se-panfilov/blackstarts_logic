// import Map from './constructors/Map.js'
// import Cruiser from './constructors/Cruiser.js'
import StorageInitializer from './StorageInitializer.js'

export default {
	init () {
		console.log(12312321312)
		const store = StorageInitializer.init()
		console.log(store)
		store.dispatch({ type: 'SET_MAP_SIZE' })

		//const Map = new Map()
		//console.info(Map)

		// const Cruiser = new Cruiser()
		//TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
		// console.info(Cruiser)
	}
}
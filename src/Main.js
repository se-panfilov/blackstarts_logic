import Map from './constructors/Map.js'
import Cruiser from './constructors/Cruiser.js'

export default  Main = {
	init () {
		const Map = new Map()
		console.info(Map)
		const Cruiser = new Cruiser()
		//TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
		console.info(Cruiser)
	}
}
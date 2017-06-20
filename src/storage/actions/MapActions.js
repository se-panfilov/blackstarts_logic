import Immutable from 'immutable'
import StorageConstants from '../constants/StorageConstants.js'

// export const Immutable.Map({
export const setMapSize = ({height, width}) => ({
	type: StorageConstants.SET_MAP_SIZE,
	height: height,
	width: width
})
// })
import Immutable from 'immutable'
import StorageConstants from '../constants/StorageConstants.js'

module.exports = Immutable.Map({
	setMapSize: function ({height, width}) {
		return {
			type: StorageConstants.SET_MAP_SIZE,
			height: height,
			width: width
		}
	}
})
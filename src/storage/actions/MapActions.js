import Immutable from 'immutable'
import ActionsConstants from '../constants/ActionsConstants.js'

// export const Immutable.Map({
export const setMapSize = ({height, width}) => ({
  type: ActionsConstants.SET_MAP_SIZE,
  height: height,
  width: width
})
// })
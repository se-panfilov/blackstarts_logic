import {combineReducers} from 'redux-immutablejs'
import MapReducers from './reducers/MapReducers.js'
import CruiserReducers from './reducers/CruiserReducers.js'

export default combineReducers({
	MapReducers,
	CruiserReducers
})
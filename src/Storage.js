import Immutable from 'immutable'
import Reducers from './storage/reducers/MainReducers.js'
//import DevTools from 'utils/devtools'
import Redux from 'redux'

export default {
	storage: null,
	init (initialData = {}) {
		initialData = Immutable.fromJS(initialData)

		const enhancer = Redux.compose(
			Redux.applyMiddleware(
				// thunkMiddleware
			)//,
			// DevTools.instrument()
		)

		const storage = Redux.createStore(Reducers, initialData, enhancer)
		this.storage = storage

		return storage
	}
}
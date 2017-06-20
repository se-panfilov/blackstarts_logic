import Immutable from 'immutable'
import Reducers from './Reducers.js'
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

		return Redux.createStore(Reducers, initialData, enhancer)
	},
	setStorage (storage) {
		this.storage = storage
	}

}
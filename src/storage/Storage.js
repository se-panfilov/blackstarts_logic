// import Immutable from 'immutable'
import Reducers from './Reducers.js'
//import DevTools from 'utils/devtools'
import {createStore, compose, applyMiddleware} from 'redux'


export default {
	storage: null,
	init (initialData = {}) {
		// initialData = Immutable.fromJS(initialData)

		console.info('Redux')
		console.info(createStore)
		console.info(compose)
		console.info(applyMiddleware)
		console.info('Redux')

		// const enhancer = compose(
		// 	applyMiddleware(
		//		// thunkMiddleware
		// 	)//,
		//	// DevTools.instrument()
		// )

		// return createStore(Reducers, initialData, enhancer)
		return createStore(Reducers, initialData)
	},
	setStorage (storage) {
		this.storage = storage
	}

}
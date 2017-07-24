import Storage from './storage/Storage.js'

export default {
	init () {
		const store = Storage.init()
		Storage.setStorage(store)
		console.log('store')
		console.log(store)
		console.log('store')
		return store
	}
}
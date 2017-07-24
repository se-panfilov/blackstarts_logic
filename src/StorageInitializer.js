import Storage from './storage/Storage.js'

export default {
	init () {
		const store = Storage.init()
		Storage.setStorage(store)
		return store
	}
}
import Storage from './storage/Storage.js'

export default {
	init () {
		console.log(12321)
		const store = Storage.init()
		Storage.setStorage(store)
		return store
	}
}
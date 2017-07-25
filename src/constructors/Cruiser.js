import CruiserTypeConfig from '../configs/ship_type/major/CruiserTypeConfig.js'
import MainEngineConfig from '../configs/subsystems/engine/MainEngineConfig.js'
import LauncherConfig from '../configs/subsystems/weapon/LauncherConfig.js'
import RailGunConfig from '../configs/subsystems/weapon/RailGunConfig.js'
import UltaGunConfig from '../configs/subsystems/weapon/RailGunConfig'
import Immutable from 'immutable'

function set (obj, fileld, config) {
	let method = 'set'
	if (Array.isArray(fileld)) {
		method = 'setIn'
	}

	return obj[method](fileld, new Immutable.Map(config))
}

function setShip (obj, config) {
	if(!obj) throw new Error ('No obj passed')
	if(!config) throw new Error ('No config passed')

	return set(obj, 'ship', config)
}

function setEngine (obj, config) {
	if(!obj) throw new Error ('No obj passed')
	if(!config) throw new Error ('No config passed')

	return set(obj, 'engine', config)
}

function setWeapon (obj, config) {
	if(!obj) throw new Error ('No obj passed')
	if(!config) throw new Error ('No config passed')
	if (!config.get('name')) throw new Error('No name exist in config')
	return set(obj, ['weapons', config.name], config)
}

export default function Cruiser () {
	let result = new Immutable.Map()
	result = setShip(result, CruiserTypeConfig)
	result = setEngine(result, MainEngineConfig)
	result = setWeapon(result, LauncherConfig)
	result = setWeapon(result, RailGunConfig)
	result = setWeapon(result, UltaGunConfig)

	return result
}


//TODO (S.Panfilov) check if ES6 classes would fit better
// class Parent {
// 	constructor() {
// 		console.log(new.target)
// 	}
// }
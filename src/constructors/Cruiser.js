import CruiserTypeConfig from '../configs/ship_type/major/CruiserTypeConfig.js'
import MainEngineConfig from '../configs/subsystems/engine/MainEngineConfig.js'
import LauncherConfig from '../configs/subsystems/weapon/LauncherConfig.js'
import RailGunConfig from '../configs/subsystems/weapon/RailGunConfig.js'
import UltaGunConfig from '../configs/subsystems/weapon/RailGunConfig'

export default function Cruiser() {
	const result = {}
	result.ship = {}
	//TODO (S.Panfilov) replace with deepcopy and extract in own function(s)
	Object.assign(result.ship, CruiserTypeConfig)
	result.engine = {}
	Object.assign(result.engine, MainEngineConfig)
	result.weapons = {}
	result.weapons[LauncherConfig.name] = {}
	Object.assign(result.weapons, LauncherConfig)
	result.weapons[RailGunConfig.name] = {}
	Object.assign(result.ship, RailGunConfig)
	result.weapons[UltaGunConfig.name] = {}
	Object.assign(result.ship, UltaGunConfig)

	return result
}


//TODO (S.Panfilov) check if ES6 classes would fit better
// class Parent {
// 	constructor() {
// 		console.log(new.target)
// 	}
// }
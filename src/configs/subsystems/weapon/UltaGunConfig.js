import WeaponKind from 'src/constants/weapon/WeaponKind.json'
import WeaponType from 'src/constants/weapon/WeaponType.json'
import SubSystem from 'src/constants/SubSystem.json'

export default {
	name: 'UltaGun',
	subsystemType: SubSystem.WEAPON,
	kind: WeaponKind.BEAM,
	type: WeaponType.COURSE_GUN,
	//requirements (space, energy, manpower, intel)
	//usage: (man, intel, energy)
	//cooldown (sec)
	//ammoSpeed
	//range
	//accuracy
	//canBePlacedTo: [major, minor]
	//
}
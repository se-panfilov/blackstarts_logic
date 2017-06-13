import WeaponKind from 'src/constants/weapon/WeaponKind.json'
import WeaponType from 'src/constants/weapon/WeaponType.json'
import WeaponFireSpeed from 'src/constants/weapon/WeaponFireSpeed.json'
import WeaponFireCoolDown from 'src/constants/weapon/WeaponFireCoolDown.json'
import WeaponFireRange from 'src/constants/weapon/WeaponFireRange.json'
import WeaponFireAccuracy from 'src/constants/weapon/WeaponFireAccuracy.json'
import AmmoUsage from 'src/constants/AmmoUsage.json'
import SubSystem from 'src/constants/SubSystem.json'

export default {
	name: 'UltaGun',
	subsystemType: SubSystem.WEAPON,
	kind: WeaponKind.BEAM,
	type: WeaponType.COURSE_GUN,
	fire: {
		speed: WeaponFireSpeed.EXTRA_FAST,
		coolDown: WeaponFireCoolDown.EXTRA_SLOW, //example -function correct(WeaponCoolDown.EXTRA_SLOW, 1245)
		range: WeaponFireRange.EXTRA_LONG,
		accuracy: WeaponFireAccuracy.EXTRA_HIGHT
	},
	ammo: {
		usagePerShot: AmmoUsage.SINGLE
	}

	//requirements (space, energy, manpower, intel)
	//usage: (man, intel, energy)
	//ammoSpeed
	//canBePlacedTo: [major, minor]
	//
}
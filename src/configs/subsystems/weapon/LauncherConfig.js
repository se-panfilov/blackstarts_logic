import WeaponKind from 'src/constants/weapon/WeaponKind.json'
import WeaponType from 'src/constants/weapon/WeaponType.json'
import WeaponFireSpeed from 'src/constants/weapon/WeaponFireSpeed.json'
import WeaponFireCoolDown from 'src/constants/weapon/WeaponFireCoolDown.json'
import WeaponFireRange from 'src/constants/weapon/WeaponFireRange.json'
import WeaponFireAccuracy from 'src/constants/weapon/WeaponFireAccuracy.json'
import AmmoUsage from 'src/constants/AmmoUsage.json'
import SubSystem from 'src/constants/SubSystem.json'

export default {
	name: 'Launcher',
	subsystemType: SubSystem.WEAPON,
	kind: WeaponKind.MISSILE,
	type: WeaponType.ONBOARD_GUN,
	fire: {
		speed: WeaponFireSpeed.SLOW,
		coolDown: WeaponFireCoolDown.SLOW, //example -function correct(WeaponCoolDown.EXTRA_SLOW, 1245)
		range: WeaponFireRange.EXTRA_LONG,
		accuracy: WeaponFireAccuracy.NORMAL
	},
	ammo: {
		usagePerShot: AmmoUsage.SINGLE
	}
}
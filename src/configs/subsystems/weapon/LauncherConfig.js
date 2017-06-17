import WeaponKind from '../../../constants/weapon/WeaponKind.json'
import WeaponType from '../../../constants/weapon/WeaponType.json'
import WeaponFireSpeed from '../../../constants/weapon/WeaponFireSpeed.json'
import WeaponFireCoolDown from '../../../constants/weapon/WeaponFireCoolDown.json'
import WeaponFireRange from '../../../constants/weapon/WeaponFireRange.json'
import WeaponFireAccuracy from '../../../constants/weapon/WeaponFireAccuracy.json'
import AmmoUsage from '../../../constants/AmmoUsage.json'
import SubSystem from '../../../constants/SubSystem.json'

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
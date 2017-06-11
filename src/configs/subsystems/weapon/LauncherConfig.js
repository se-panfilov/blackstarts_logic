import WeaponKind from 'src/constants/weapon/WeaponKind.json'
import WeaponType from 'src/constants/weapon/WeaponType.json'
import SubSystem from 'src/constants/SubSystem.json'

export default {
	name: 'Launcher',
	subsystemType: SubSystem.WEAPON,
	kind: WeaponKind.MISSILE,
	type: WeaponType.ONBOARD_GUN
}
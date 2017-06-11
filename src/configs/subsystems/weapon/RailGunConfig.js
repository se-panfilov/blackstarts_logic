import WeaponKind from 'src/constants/weapon/WeaponKind.json'
import WeaponType from 'src/constants/weapon/WeaponType.json'
import SubSystem from 'src/constants/SubSystem.json'

export default {
	name: 'RailGun',
	subsystemType: SubSystem.WEAPON,
	kind: WeaponKind.KINETIC,
	type: WeaponType.ONBOARD_GUN,
}
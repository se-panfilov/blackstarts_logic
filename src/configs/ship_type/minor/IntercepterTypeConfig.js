import MinorShipType from 'src/constants/ship/minor/MinorShipType.json'
import MinorShipSize from 'src/constants/ship/minor/MinorShipSize.json'
import MinorShipMobility from 'src/constants/ship/minor/MinorShipMobility.json'
import MinorShipFuelLodout from 'src/constants/ship/minor/MinorShipFuelLodout.json'
import MinorShipAmmoLodout from 'src/constants/ship/minor/MinorShipAmmoLodout.json'

export default {
	name: MinorShipType.ASSAULTER,
	size: MinorShipSize.NORMAL,
	type: MinorShipType.ASSAULTER,
	mobility: MinorShipMobility.NORMAL,
	fuel: MinorShipFuelLodout.NORMAL,
	lodout: MinorShipAmmoLodout.LOW
}
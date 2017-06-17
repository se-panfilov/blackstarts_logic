import EngineKind from '../../../constants/engine/EngineKind.json'
import EngineType from '../../../constants/engine/EngineType.json'
import EngineSpeed from '../../../constants/engine/EngineSpeed.json'
import EngineName from '../../../constants/engine/EngineName.json'
import SubSystem from '../../../constants/SubSystem.json'

export default {
	name: EngineName.SOME_RANDOM_ENGINE_NAME, //TODO shit name
	subsystemType: SubSystem.ENGINE,
	kind: EngineKind.IMPULSE,
	type: EngineType.MAIN,
	speed: EngineSpeed.MAIN,


	//requirements (space, energy, manpower, intel)
	//usage: (man, intel, energy)
	//ammoSpeed
	//canBePlacedTo: [major, minor]
	//
}
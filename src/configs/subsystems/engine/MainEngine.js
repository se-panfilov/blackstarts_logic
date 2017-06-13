import EngineKind from 'src/constants/engine/EngineKind.json'
import EngineType from 'src/constants/engine/EngineType.json'
import EngineSpeed from 'src/constants/engine/EngineSpeed.json'
import EngineName from 'src/constants/engine/EngineName.json'
import SubSystem from 'src/constants/SubSystem.json'

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
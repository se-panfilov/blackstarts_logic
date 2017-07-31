// @flow
import Immutable from 'immutable'
import {Storage} from '../storage/Storage'
import {CREATE_CRUISER} from '../storage/constants/ActionsConstants'

export default function Cruiser () {
  return Storage.dispatch({type: CREATE_CRUISER, data: new Immutable.Map()})
}
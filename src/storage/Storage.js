// @flow

import Immutable from 'immutable'
import Reducers from './Reducers.js'
// import DevTools from 'utils/devtools'
// import {applyMiddleware, compose, createStore} from 'redux'
import {createStore} from 'redux'

export default {
  storage: null,
  init (initialData: Object = {}) {
    initialData = Immutable.fromJS(initialData)

    // const enhancer = compose(
    //  applyMiddleware(
    //      // thunkMiddleware
    //     )//,
    //  // DevTools.instrument()
    // )

    // return createStore(Reducers, initialData, enhancer)
    return createStore(Reducers, initialData)
  },
  setStorage (storage: Object) {
    this.storage = storage
  }

}
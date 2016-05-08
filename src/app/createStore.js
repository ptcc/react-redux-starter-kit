import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from './reducers'
import sagas from './sagas'

export default (initialState = {}, history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  let middleware = applyMiddleware(
    createSagaMiddleware(sagas),
    thunk,
    routerMiddleware(history)
  )

  // ======================================================
  // Developer Tools
  // ======================================================
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      middleware.push(middleware, devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    middleware
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}

import Home from './Home'
import { injectReducer } from 'app/reducers'

// Sync route definition

export default (store) => ({
  path: '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const reducer = require('./homeReducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'modules', reducer })

      /*  Return getComponent   */
      cb(null, Home)

    /* Webpack named bundle   */
    }, 'home')
  }
})
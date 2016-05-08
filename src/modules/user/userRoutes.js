import { injectReducer } from 'app/reducers'

export default (store) => ({
  path: 'users',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const User = require('./User').default
      const reducer = require('./userReducer').default

      /*  Add the reducer to the store on key 'user'  */
      injectReducer(store, { key: 'user', reducer })

      /*  Return getComponent   */
      cb(null, User)

    /* Webpack named bundle   */
    }, 'user')
  }
})

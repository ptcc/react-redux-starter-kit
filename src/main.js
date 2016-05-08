import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')
let render = () => {
  ReactDOM.render(App, MOUNT_NODE)
}

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./app/routes'], () => render())
}

// ========================================================
// Go!
// ========================================================
render()

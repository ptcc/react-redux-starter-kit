import React, { Component } from 'react'
import Header from '../../app/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <div className="container text-center">
        <Header />
        <div className={classes.mainContainer}>
          {children}
        </div>
      </div>
    )
  }
}

export default CoreLayout

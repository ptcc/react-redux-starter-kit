import React, { Component } from 'react'
import Header from '../../app/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import { connect } from 'react-redux'
import { toggleModule } from '../../modules/home/homeActions'

class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    const { children, modules, toggleModule } = this.props

    return (
      <div className="container text-center">
        <Header modules={modules} toggleModule={toggleModule}/>
        <div className={classes.mainContainer}>
          {children}
        </div>
      </div>
    )
  }
}

const mapActionCreators = {
  toggleModule: (mod,enable) => toggleModule(mod,enable)
}

const mapStateToProps = (state,{children}) => ({
  modules: state.modules,
  children
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)


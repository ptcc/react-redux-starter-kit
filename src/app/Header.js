import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

class Header extends Component {
  render() {
    let { modules, toggleModule } = this.props
    return (
      <div>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to="/" activeClassName={classes.activeRoute}>
          Home
        </IndexLink>
        
        {Object.keys(modules).map( module => 
          [
            ' · ',
            modules[module] &&
            <Link to={`/${module}`} activeClassName={classes.activeRoute}>
              {module}
            </Link>
            ,
            <span onClick={ () => toggleModule(module, !modules[module])}>
              {modules && modules[module] ? ' X':` Enable ${module}`}
            </span>
          ]
        )}
        

      </div>
    )
  }
}

export default Header

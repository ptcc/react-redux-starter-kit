import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userActions from './userActions'
import { UserPropType } from './userPropTypes'

class User extends Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    const { loading, users } = this.props

    return (
      <div className="row">
        {loading &&
          <div className="col-xs-12">
            Loading
          </div>
        }
        {!loading &&
          users.map(user => (
            <div key={user.id} className="col-xs-12 col-md-6 col-lg-3">
              {user.login}
            </div>
          ))
        }
      </div>
    )
  }
}

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserPropType)),
  loading: PropTypes.bool.isRequired,
  loadUsers: PropTypes.func.isRequired
}

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the user:   */

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  users: state.user.list
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadUsers: userActions.list.request
}, dispatch)

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const user = (state) => state.user
    const tripleCount = createSelector(user, (count) => count * 3)
    const mapStateToProps = (state) => ({
      user: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(User)

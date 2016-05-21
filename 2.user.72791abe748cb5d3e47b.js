webpackJsonp([2],{

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(383);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(387);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(388);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(392);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(393);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(235);
	
	var _reactRedux = __webpack_require__(394);
	
	var _userActions = __webpack_require__(365);
	
	var _userActions2 = _interopRequireDefault(_userActions);
	
	var _userPropTypes = __webpack_require__(425);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var User = function (_Component) {
	  (0, _inherits3.default)(User, _Component);
	
	  function User() {
	    (0, _classCallCheck3.default)(this, User);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(User).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(User, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.loadUsers();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var loading = _props.loading;
	      var users = _props.users;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        loading && _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12' },
	          'Loading'
	        ),
	        !loading && users.map(function (user) {
	          return _react2.default.createElement(
	            'div',
	            { key: user.id, className: 'col-xs-12 col-md-6 col-lg-3' },
	            user.login
	          );
	        })
	      );
	    }
	  }]);
	  return User;
	}(_react.Component);
	
	User.propTypes = {
	  users: _react.PropTypes.arrayOf(_react.PropTypes.shape(_userPropTypes.UserPropType)),
	  loading: _react.PropTypes.bool.isRequired,
	  loadUsers: _react.PropTypes.func.isRequired
	};
	
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the user:   */
	
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    loading: state.user.loading,
	    users: state.user.list
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    loadUsers: _userActions2.default.list.request
	  }, dispatch);
	};
	
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(User);

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var UserPropType = {
	  id: _react.PropTypes.number.isRequired,
	  login: _react.PropTypes.string.isRequired
	};
	
	exports.default = UserPropType;

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(262);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _userActions = __webpack_require__(365);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  list: [],
	  item: null,
	  error: null,
	  loading: false
	};
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var _ref = arguments[1];
	  var type = _ref.type;
	  var payload = _ref.payload;
	
	  switch (type) {
	    case _userActions.userActionTypes.list.REQUEST:
	    case _userActions.userActionTypes.item.REQUEST:
	      return (0, _extends3.default)({}, state, {
	        loading: true
	      });
	
	    case _userActions.userActionTypes.list.SUCCESS:
	      return (0, _extends3.default)({}, state, {
	        list: payload,
	        error: null,
	        loading: false
	      });
	
	    case _userActions.userActionTypes.list.FAILURE:
	      return (0, _extends3.default)({}, state, {
	        list: [],
	        error: payload,
	        loading: false
	      });
	
	    case _userActions.userActionTypes.item.SUCCESS:
	      return (0, _extends3.default)({}, state, {
	        item: payload,
	        error: null,
	        loading: false
	      });
	
	    case _userActions.userActionTypes.item.FAILURE:
	      return (0, _extends3.default)({}, state, {
	        item: null,
	        error: payload,
	        loading: false
	      });
	
	    default:
	      return state;
	  }
	};

/***/ }

});
//# sourceMappingURL=2.user.72791abe748cb5d3e47b.js.map
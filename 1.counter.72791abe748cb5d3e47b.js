webpackJsonp([1],{

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Counter = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Counter = __webpack_require__(419);
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	var _reactRedux = __webpack_require__(394);
	
	var _counterReducer = __webpack_require__(421);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Counter = exports.Counter = function Counter(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: _Counter2.default.counterContainer },
	      'Counter:',
	      ' ',
	      _react2.default.createElement(
	        'span',
	        { className: _Counter2.default['counter--green'] },
	        props.counter
	      )
	    ),
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: props.increment },
	      'Increment'
	    ),
	    ' ',
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: props.doubleAsync },
	      'Double (Async)'
	    )
	  );
	};
	
	Counter.propTypes = {
	  counter: _react2.default.PropTypes.number.isRequired,
	  doubleAsync: _react2.default.PropTypes.func.isRequired,
	  increment: _react2.default.PropTypes.func.isRequired
	};
	
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the counter:   */
	
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	
	var mapActionCreators = {
	  increment: function increment() {
	    return (0, _counterReducer.increment)(1);
	  },
	  doubleAsync: _counterReducer.doubleAsync
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    counter: state.counter
	  };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	    import { createSelector } from 'reselect'
	    const counter = (state) => state.counter
	    const tripleCount = createSelector(counter, (count) => count * 3)
	    const mapStateToProps = (state) => ({
	      counter: tripleCount(state)
	    })
	
	    Selectors can compute derived data, allowing Redux to store the minimal possible state.
	    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	    Selectors are composable. They can be used as input to other selectors.
	    https://github.com/reactjs/reselect    */
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreators)(Counter);

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(420);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(407)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(420, function() {
				var newContent = __webpack_require__(420);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(406)();
	// imports
	
	
	// module
	exports.push([module.id, ".Counter__counter____zpiE{font-weight:700}.Counter__counter--green___2pKoG{color:#19c819}.Counter__counterContainer___2qYUt{margin:1em auto}", "", {"version":3,"sources":["/./src/modules/src/modules/counter/Counter.scss"],"names":[],"mappings":"AAAA,0BACE,eAAkB,CACnB,iCAGmB,aACR,CACX,mCAGC,eAAiB,CAClB","file":"Counter.scss","sourcesContent":[".counter {\n  font-weight: bold;\n}\n\n.counter--green {\n  composes: counter;\n  color: rgb(25,200,25);\n}\n\n.counterContainer {\n  margin: 1em auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"counter": "Counter__counter____zpiE",
		"counter--green": "Counter__counter--green___2pKoG Counter__counter____zpiE",
		"counterContainer": "Counter__counterContainer___2qYUt"
	};

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.doubleAsync = exports.COUNTER_INCREMENT = undefined;
	
	var _defineProperty2 = __webpack_require__(422);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _promise = __webpack_require__(305);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.increment = increment;
	exports.default = counterReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function increment() {
	  var value = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	  return {
	    type: COUNTER_INCREMENT,
	    payload: value
	  };
	}
	
	/*  This is a thunk, meaning it is a function that immediately
	    returns a function for lazy evaluation. It is incredibly useful for
	    creating async actions, especially when combined with redux-thunk!
	
	    NOTE: This is solely for demonstration purposes. In a real application,
	    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
	    reducer take care of this logic.  */
	
	var doubleAsync = exports.doubleAsync = function doubleAsync() {
	  return function (dispatch, getState) {
	    return new _promise2.default(function (resolve) {
	      setTimeout(function () {
	        dispatch(increment(getState().counter));
	        resolve();
	      }, 200);
	    });
	  };
	};
	
	var actions = exports.actions = {
	  increment: increment,
	  doubleAsync: doubleAsync
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (0, _defineProperty3.default)({}, COUNTER_INCREMENT, function (state, action) {
	  return state + action.payload;
	});
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = 0;
	function counterReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(389);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }

});
//# sourceMappingURL=1.counter.72791abe748cb5d3e47b.js.map
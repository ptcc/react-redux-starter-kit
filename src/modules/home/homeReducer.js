import { TOGGLE_MODULE } from './homeActions'
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  TOGGLE_MODULE: (state, action) => ({...state, [action.moduleName]: action.enabled})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {counter:true,user:false}
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

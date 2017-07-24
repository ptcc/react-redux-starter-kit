export const TOGGLE_MODULE = 'TOGGLE_MODULE'

export const toggleModule = (moduleName, enabled) => {
  return {
    type: TOGGLE_MODULE,
    moduleName,
    enabled
  }
}


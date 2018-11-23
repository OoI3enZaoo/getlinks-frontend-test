import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'
import thunk from 'redux-thunk'

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
)

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers)

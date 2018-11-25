/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helpers - mockStore
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import configureMockStore from 'redux-mock-store'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

/**
 * Enchant function for create redux store for unit test.
 * @return {Function} mock store.
 */
export default function createMockStore() {
  const middlewares = [
    apiMiddleware,
    thunk,
  ]

  return configureMockStore(middlewares)
}

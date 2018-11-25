import memberReducer, { initialState } from '../../stores/reducers/memberReducer'
import { FETCH_MEMBER_REQUEST, FETCH_MEMBER_SUCCESS } from '../../stores/reducers/memberReducer'
import { fetchMember } from '../../stores/reducers/memberReducer'
import createMockStore from '../../helpers/mockStore'

describe('Request Reducer', () => {
  it('handle Fetch member request', () => {
    expect(memberReducer(undefined, {
      type: FETCH_MEMBER_REQUEST,            
    })).toEqual({
      ...initialState,
      isLoadingMember: true,
    })
  })
  it('handle Fetch member success', () => {    
    const store = createMockStore()(initialState)
    return store.dispatch(fetchMember()).then((payload) => {
      const expectedActions = [
        { type: FETCH_MEMBER_REQUEST },
        {
          type: FETCH_MEMBER_SUCCESS,
          ...payload,
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
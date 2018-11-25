
export const FETCH_MEMBER_REQUEST = 'FETCH_MEMBER_REQUEST'
export const FETCH_MEMBER_SUCCESS = 'FETCH_MEMBER_SUCCESS'
import 'isomorphic-unfetch'
export const initialState = {
  isLoadingMember: false,
  members: [],   
}

export default function memberReducer (state = initialState, action) {
  const { type } = action
  switch (type) {
    case FETCH_MEMBER_REQUEST:
      return {
        ...state,
        isLoadingMember: true,
      }
    case FETCH_MEMBER_SUCCESS:
      return {
        ...state,
        members: action.payload,
        isLoadingMember: true,        
      }
    default: return state
  }
}

export const fetchMember =  () => async dispatch => {
  dispatch({ type: 'FETCH_MEMBER_REQUEST' })
  const fetchMember = await fetch('https://getlinks-testing-backend.herokuapp.com/members')
  const { result } = await fetchMember.json()  
  return dispatch({ type: FETCH_MEMBER_SUCCESS, payload: result })
}
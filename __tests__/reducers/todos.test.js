import todoReducer, { initialState } from '../../reducers/todos'
import { ADD_TODO, REMOVE_TODO, FETCH_STAR_REQUEST, FETCH_STAR_SUCCESS } from '../../actions'
import { fetchStar } from '../../actions/todo'
import createMockStore from '../../helpers/mockStore'
// import 'cross-fetch/polyfill'

describe(' Request Reducer', () => {
    it('todoReducer has a default state', () => {
        expect(todoReducer(undefined, { type: 'unexpected'})).toEqual(initialState)
    })
    it ('can handle ADD_TODO', () => {
        expect(todoReducer(undefined, {
            type: ADD_TODO,
            text: 'hello'
        })).toEqual({
            ...initialState,
            messageArray: [{ text: 'hello'}]
        })
    })
    it ('can handle DELETE_TODO', () => {
        expect(todoReducer(undefined, {
            type: REMOVE_TODO,
            todo: 'hello' 
        })).toEqual({
            ...initialState,
            messageArray: []
        })
    })
    it('handle Fetch star request', () => {
        expect(todoReducer(undefined, {
            type: FETCH_STAR_REQUEST,            
        })).toEqual({
            ...initialState,
            isLoadingFetchStar: true

        })
    })
    it('handle Fetch star success', () => {
        expect.assertions(2)
        const store = createMockStore()(initialState)
        return store.dispatch(fetchStar()).then((payload) => {
            const expectedActions = [
                { type: FETCH_STAR_REQUEST },
                {
                  type: FETCH_STAR_SUCCESS,
                  ...payload,
                },
              ]
              expect(store.getActions()).toEqual(expectedActions)
              expect(payload).not.toEqual({
                  payload: {
                    message: "Not Found",
                    documentation_url: "https://developer.github.com/v3/repos/#get",                    
                  },
                  type: FETCH_STAR_SUCCESS
              })
        })
    })
})
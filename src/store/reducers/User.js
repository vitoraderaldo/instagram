import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_LOADED,
    LOADING_USER
} from '../actions/ActionTypes'

const initialState = {
    name: null,
    email: null,
    isLoading: false,
    token: null
}

/*  Os reducers escutam as Actions e 
    determinam as alterações no estado Global
 */
const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token                
            }
        case USER_LOGGED_OUT:
            return{
                ...initialState,               
            }
        case LOADING_USER:
            return{
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return{
                ...state,
                isLoading: false
            }
        default:
            return state                
    }
}

export default reducer;

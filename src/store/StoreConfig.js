import {createStore,combineReducers} from 'redux'
import UserReducer from './reducers/User'

/* Torna 'Global' as variaveis */
const reducers = combineReducers({
    user: UserReducer
})
const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
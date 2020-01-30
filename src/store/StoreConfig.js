import {createStore,combineReducers} from 'redux'
import UserReducer from './reducers/User'


/*  A store é um objeto JavaScript que possui todos os estados dos seus componentes.
    "Torna Global" os estados dos componentes */
const reducers = combineReducers({
    user: UserReducer
})
const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
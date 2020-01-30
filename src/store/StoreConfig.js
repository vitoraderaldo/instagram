import {createStore,combineReducers} from 'redux'
import UserReducer from './reducers/User'
import PostReducer from './reducers/Posts'


/*  A store é um objeto JavaScript que possui todos os estados dos seus componentes.
    "Torna Global" os estados dos componentes */
const reducers = combineReducers({
    user: UserReducer,
    posts: PostReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
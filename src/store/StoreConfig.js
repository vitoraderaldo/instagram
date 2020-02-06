import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import UserReducer from './reducers/User'
import PostReducer from './reducers/Posts'
import MessageReducer from './reducers/Message'
import thunk from 'redux-thunk'

/*  A store é um objeto JavaScript que possui todos os estados dos seus componentes.
    "Torna Global" os estados dos componentes */
const reducers = combineReducers({
    user: UserReducer,
    posts: PostReducer,
    message: MessageReducer
})

const storeConfig = () => {
    return createStore(reducers,compose(applyMiddleware(thunk)))
}

export default storeConfig
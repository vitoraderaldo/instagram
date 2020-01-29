import {USER_LOGGED_IN,USER_LOGGED_OUT} from './ActionTypes'

/*  Esta função é chamada de ActionCreator.
    Utilizada para escutar as mudanças da aplicação.
    Não realiza alteração no estado global.
 */
export const login = (user) => {   
    const actionObject = {
        type: USER_LOGGED_IN,
        payload: user
    }    
    return actionObject    
}

export const logout = () => {
    return{
        type: USER_LOGGED_OUT        
    }
}
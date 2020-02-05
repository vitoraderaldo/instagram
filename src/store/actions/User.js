import {USER_LOGGED_IN,USER_LOGGED_OUT} from './ActionTypes'
import axios from 'axios'
import { Alert } from 'react-native'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDTT1Lz_4MSmgdHAKkw7YCO2sOsKFLw3r4'

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

export const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => Alert.alert(err.toJSON()))
        .then(res => {
            if(res.data.localId){
                axios.put(`/users/${res.data.localId}.json`,{
                    name: user.name,
                })
                .catch(err => "Erro: "+console.log(err))
                .then(res => {
                    console.log("Usuário registrado com sucesso")
                })
            }
        })
    }
}

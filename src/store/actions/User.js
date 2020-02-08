import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED,    
}from './ActionTypes'
import axios from 'axios'
import { Alert } from 'react-native'
import {setMessage} from './Message'
const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDTT1Lz_4MSmgdHAKkw7YCO2sOsKFLw3r4'

/*  Esta função é chamada de ActionCreator.
    Utilizada para escutar as mudanças da aplicação.
    Não realiza alteração no estado global.
 */
export const userLogged = (user) => {   
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
                .then(() => {                                 
                    dispatch(login(user))
                    
                })
            }
        })
    }
}


export const loadingUser = () => {
    return{
        type: LOADING_USER
    }
}

export const userLoaded = user => {
    return{
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {      
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`,{
            email: user.email,
            password: user.password,   
            returnSecureToken: true 
        })

        .catch(err => dispatch(setMessage({
            title:'Erro',
            text:err
        })))
        .then(res => {
            if(res.data.localId){
                user.token = res.data.idToken
                axios.get(`/users/${res.data.localId}.json`)
                .catch(err => console.log(err))
                .then(res => {
                    delete user.password
                    user.name = res.data.name
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}

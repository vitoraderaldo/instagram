import {ADD_POST} from './ActionTypes'

export const addPost = (post) => {
    return{
        type:ADD_POST,
        payload: post
    }
}
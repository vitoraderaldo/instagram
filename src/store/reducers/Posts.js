import {ADD_POST} from '../actions/ActionTypes'

const initialState = {
    posts:[
        {
            id:Math.random(),
            nickname:"Rafael",
            email:"rafa",                
            image: require('../../../assets/imgs/gate.jpg'),
            comments: [
                {
                    nickname:"John",
                    comment:"Top Demais"
                },
                {
                    nickname: "Braia",
                    comment: "run run"
                }
            ]
        },
        {
            id:Math.random(),
            nickname:"Vitor",
            email:"vitor",
            image: require('../../../assets/imgs/fence.jpg'),
            comments: []
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer;
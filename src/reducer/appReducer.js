import {CREATE_DATA_GAME, TIMER, RESET_DATA_GAME} from "./types";

const initialState = {
    example: [],
    count: 0,
}

export const appReducer = (state = initialState, action )=> {
    switch (action.type){
        case CREATE_DATA_GAME:
            return {...state, example: action.payload}
        case TIMER:
            return {...state, count: state.count + 1}
        case RESET_DATA_GAME:
            return  {...state, example: []}
        default: return state
    }
}
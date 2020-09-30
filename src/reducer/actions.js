import {
    CREATE_DATA_GAME,
    TIMER,
    RESET_DATA_GAME
} from "./types";


export function createTask(task){
    return {
        type: CREATE_DATA_GAME,
        payload: task,
    }
}

export function createTimer(count){
    return {
        type: TIMER,
        payload: count
    }
}

export function resetTask(){
    return {
        type: RESET_DATA_GAME,
    }
}
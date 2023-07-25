import {COUNTER_INCREMENT, COUNTER_RESET} from "./counterActionCreators";

export interface CounterState {
    count: number|string,
    minCount: number,
    maxCount: number,
}

export const initialState: CounterState = {
    count: 0,
    minCount: 0,
    maxCount: 5,
}

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: +state.count + 1
            }
        case COUNTER_RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }

}
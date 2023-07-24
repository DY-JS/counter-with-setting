import {CounterState} from "../counter/counterReducer";

export interface CustomCounterState extends CounterState{
    startCount: number
}

export const initialState: CustomCounterState = {
    count: 0,
    minCount: 0,
    maxCount: 0,
    startCount: 0,
}

export const customCounterReducer = (state = initialState, action: any ) => {
    switch(action.type) {
        default: return state;
    }

}
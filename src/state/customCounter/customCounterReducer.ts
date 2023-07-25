import {CounterState} from "../counter/counterReducer";
import {
    CUSTOM_COUNTER_CHANGE_COUNT,
    CUSTOM_COUNTER_CHANGE_MAX_COUNT,
    CUSTOM_COUNTER_CHANGE_START_COUNT,
    CUSTOM_COUNTER_INCREMENT,
    CUSTOM_COUNTER_RESET,
    CUSTOM_COUNTER_SET_ERROR,
    CUSTOM_COUNTER_SET_SETTING_MESSAGE,
    UnionCustomCounterType
} from "./customCounterActionCreators";

export interface CustomCounterState extends CounterState{
    startCount: number,
    error: boolean
}

export const initialState: CustomCounterState = {
    count: 0,
    minCount: 0,
    maxCount: 5,
    startCount: 0,
    error: false
}

export const customCounterReducer = (state = initialState, action: UnionCustomCounterType ): CustomCounterState => {
    switch(action.type) {
        case CUSTOM_COUNTER_INCREMENT:
            return {
                ...state,
                count: +state.count + 1
            }
        case CUSTOM_COUNTER_RESET:
            return {
                ...state,
                count: state.startCount
            }
        case CUSTOM_COUNTER_CHANGE_MAX_COUNT:
            return {
                ...state,
                maxCount: action.payload.newMaxCount,
            };

        case CUSTOM_COUNTER_CHANGE_START_COUNT:
            return {
                ...state,
                startCount: action.payload.newStartCount,
            }

        case CUSTOM_COUNTER_SET_SETTING_MESSAGE:
            return {
                ...state,
                count: action.payload.message
        };

        case CUSTOM_COUNTER_CHANGE_COUNT:
            return {
                ...state,
                count: action.payload.newCount
            }

        case CUSTOM_COUNTER_SET_ERROR:
            return {
                ...state,
                error: action.payload.error
            }

        default: return state;
    }

}
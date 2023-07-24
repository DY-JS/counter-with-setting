import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter/counterReducer";
import {customCounterReducer} from "./customCounter/customCounterReducer";

export type AppRootStore = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
    customCounter: customCounterReducer
})

export const store = createStore(rootReducer)
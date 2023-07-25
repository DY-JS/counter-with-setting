export const CUSTOM_COUNTER_INCREMENT = "CUSTOM_COUNTER_INCREMENT"
export const CUSTOM_COUNTER_RESET = "CUSTOM_COUNTER_RESET"
export const CUSTOM_COUNTER_CHANGE_MAX_COUNT = "CUSTOM_COUNTER_CHANGE_MAX_COUNT"
export const CUSTOM_COUNTER_CHANGE_START_COUNT = "CUSTOM_COUNTER_CHANGE_START_COUNT"
export const CUSTOM_COUNTER_SET_SETTING_MESSAGE = "CUSTOM_COUNTER_SET_SETTING_MESSAGE"
export const CUSTOM_COUNTER_SET_ERROR = "CUSTOM_COUNTER_SET_EROR"
export const CUSTOM_COUNTER_CHANGE_COUNT = "CUSTOM_COUNTER_CHANGE_COUNT"

export type UnionCustomCounterType = incrementACType
    | resetACType | changeMaxCountACType | setSettingMessageACType
    | changeStartCountACType | setErrorACType | changeCountACType

type incrementACType = ReturnType<typeof incrementAC>;
export const incrementAC = () => ({
    type: CUSTOM_COUNTER_INCREMENT,
} as const);

type resetACType = ReturnType<typeof resetAC>;
export const resetAC = () => ({
    type: CUSTOM_COUNTER_RESET,
} as const);

type setSettingMessageACType = ReturnType<typeof setSettingMessageAC>;
export const setSettingMessageAC = (message: string) => ({
        type: CUSTOM_COUNTER_SET_SETTING_MESSAGE,
        payload: {message},
    } as const
);

type changeCountACType = ReturnType<typeof changeCountAC>;
export const changeCountAC = (newCount: number) => ({
    type: CUSTOM_COUNTER_CHANGE_COUNT,
    payload: {newCount},
} as const);

type changeMaxCountACType = ReturnType<typeof changeMaxCountAC>;
export const changeMaxCountAC = (newMaxCount: number) => ({
    type: CUSTOM_COUNTER_CHANGE_MAX_COUNT,
    payload: {newMaxCount},
} as const);

type changeStartCountACType = ReturnType<typeof changeStartCountAC>;
export const changeStartCountAC = (newStartCount: number) => ({
    type: CUSTOM_COUNTER_CHANGE_START_COUNT,
    payload: {newStartCount},
} as const);

type setErrorACType = ReturnType<typeof setErrorAC>;
export const setErrorAC = (error: boolean) => ({
    type: CUSTOM_COUNTER_SET_ERROR,
    payload: {error},
} as const);


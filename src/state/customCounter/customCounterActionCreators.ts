export const CUSTOM_COUNTER_INCREMENT = "CUSTOM_COUNTER_INCREMENT"
export const CUSTOM_COUNTER_RESET = "CUSTOM_COUNTER_RESET"

export type UnionCustomCounterType = incrementACType | resetACType

type incrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => ({
    type: CUSTOM_COUNTER_INCREMENT
})

type resetACType = ReturnType<typeof resetAC>
export const resetAC = () => ({
    type: CUSTOM_COUNTER_RESET
})
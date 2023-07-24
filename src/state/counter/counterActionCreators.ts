export const COUNTER_INCREMENT = "COUNTER_INCREMENT"
export const COUNTER_RESET = "COUNTER_RESET"

export type UnionCounterType = incrementACType | resetACType

type incrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => ({
    type: COUNTER_INCREMENT
})

type resetACType = ReturnType<typeof resetAC>
export const resetAC = () => ({
    type: COUNTER_RESET
})
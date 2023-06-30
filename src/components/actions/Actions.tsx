import styles from "./Actions.module.css";
import {Dispatch, FC, SetStateAction} from "react";
import {Button} from "../button/Button";
import {TableType} from "../counterTwoInOne/CounterTwoInOne";

interface ActionsProps {
    type?: string
    changeType?: Dispatch<SetStateAction<TableType>>
    count: number | string
    minCount: number
    maxCount: number
    startCount?: number
    changeCount: (count: number) => void
    error?: boolean
}

export const Actions: FC<ActionsProps> = ({
                                              type,
                                              changeType,
                                              count,
                                              minCount,
                                              maxCount,
                                              startCount,
                                              changeCount,
                                              error,
                                          }) => {

    const increment = () => changeCount(+count + 1)
    const reset = () => changeCount(startCount || 0)

    const setAndSave = () => {
        changeCount(startCount || 0)
        localStorage.setItem("maxCount", JSON.stringify(maxCount));
        localStorage.setItem("startCount", JSON.stringify(startCount));
        changeType && changeType("counter")
    }

    const setSettingMode = () => {
        changeType && changeType("setting")
    }

    const isDisabled = (startCount !== undefined && (maxCount <= startCount))
        || (startCount !== undefined && startCount < 0) || error;
    const incrementDisabled = count === maxCount || isDisabled
        || typeof count === 'string'
    const resetDisabled = (startCount !== undefined ? count === startCount
        : count === minCount) || isDisabled || typeof count === 'string'

    if (type === "setting") {
        return (
            <div className={styles.actions}>
                <Button
                    disabled={isDisabled}
                    callback={setAndSave}
                    title="SET"
                />

            </div>
        )
    }

    if (type === "counter") {
        return (<div className={styles.actions}>
            <Button disabled={incrementDisabled}
                    callback={increment}
                    title="INCREMENT"/>
            <Button disabled={resetDisabled}
                    callback={reset}
                    title="RESET"/>
            <Button
                disabled={isDisabled}
                callback={setSettingMode}
                title="SET"/>
        </div>)
    }

    return (
        <div className={styles.actions}>
            <Button disabled={incrementDisabled}
                    callback={increment}
                    title="INCREMENT"/>
            <Button disabled={resetDisabled}
                    callback={reset}
                    title="RESET"/>
        </div>
    )

}

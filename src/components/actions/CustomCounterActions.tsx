import styles from "./Actions.module.css";
import {Button} from "../button/Button";
import {TableType} from "../counterTwoInOne/CounterTwoInOne";
import {useDispatch, useSelector} from "react-redux";

import {
    changeCountAC,
    incrementAC,
    resetAC
} from "../../state/customCounter/customCounterActionCreators";
import {Dispatch, SetStateAction} from "react";


interface ActionsProps {
    type?: string
    changeType?: Dispatch<SetStateAction<TableType>>
    count: number | string
    maxCount: number
    startCount: number
    error: boolean
}

export const CustomCounterActions = ({type, changeType, count, maxCount, startCount, error}: ActionsProps) => {
    const dispatch = useDispatch()

    const increment = () => dispatch(incrementAC())
    const reset = () => dispatch(resetAC())

    const setAndSave = () => {
        dispatch(changeCountAC(startCount))
        localStorage.setItem("maxCount", JSON.stringify(maxCount));
        localStorage.setItem("startCount", JSON.stringify(startCount));
        changeType && changeType("superCounter")
    }

    const setSettingMode = () => {
        changeType && changeType("setting")
    }


    const isDisabled = (startCount < 0) || error;
    const incrementDisabled = count === maxCount || isDisabled
        || typeof count === 'string'
    const resetDisabled = (count === startCount || isDisabled || typeof count === 'string');

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

    if (type === "superCounter") {
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

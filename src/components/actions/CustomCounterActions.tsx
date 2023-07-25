import styles from "./Actions.module.css";
import {Button} from "../button/Button";
import {TableType} from "../counterTwoInOne/CounterTwoInOne";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";

import {
    changeCountAC,
    incrementAC,
    resetAC
} from "../../state/customCounter/customCounterActionCreators";
import {CustomCounterState} from "../../state/customCounter/customCounterReducer";


interface ActionsProps {
    type?: string
}

export const CustomCounterActions = ({type}:ActionsProps) => {
    const {count, minCount, maxCount, startCount, error} = useSelector<AppRootStore, CustomCounterState>(state => state.customCounter)
    const dispatch = useDispatch()

    const increment = () => dispatch(incrementAC())
    const reset = () => dispatch(resetAC())

    const setAndSave = () => {
        dispatch(changeCountAC(startCount))
        localStorage.setItem("maxCount", JSON.stringify(maxCount));
        localStorage.setItem("startCount", JSON.stringify(startCount));
        //changeType && changeType("counter")
    }

    // const setSettingMode = () => {
    //     changeType && changeType("setting")
    // }


    const isDisabled =  (startCount < 0) || error;
    const incrementDisabled = count === maxCount || isDisabled
        || typeof count === 'string'
    const resetDisabled = (count === startCount || ( count === minCount)
        || isDisabled || typeof count === 'string');

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

    if (type === "super") {
        return (<div className={styles.actions}>
            <Button disabled={incrementDisabled}
                    callback={increment}
                    title="INCREMENT"/>
            <Button disabled={resetDisabled}
                    callback={reset}
                    title="RESET"/>
            <Button
                disabled={isDisabled}
                callback={()=>{}}
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

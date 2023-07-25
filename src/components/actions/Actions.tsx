import styles from "./Actions.module.css";
import {Button} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CounterState} from "../../state/counter/counterReducer";
import {incrementAC, resetAC} from "../../state/counter/counterActionCreators";

export const Actions = () => {
    const {count, maxCount} = useSelector<AppRootStore, CounterState>(state => state.counter)
    const dispatch = useDispatch()

    const increment = () => dispatch(incrementAC())
    const reset = () => dispatch(resetAC())

    const incrementDisabled = count === maxCount
        || typeof count === 'string'
    const resetDisabled =  typeof count === 'string'

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
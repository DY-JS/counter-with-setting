import {Dispatch, FC, SetStateAction, useState} from "react";
import styles from "./Table.module.css";
import Input from "../input/Input";
import {useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CounterState} from "../../state/counter/counterReducer";

interface TableProps {
    type?: string
}
//     // count: number | string
//     // maxCount: number
//     // startCount?: number
//     // changeMaxCount?: (count: number) => void
//     // changeStartCount?: (count: number) => void
//     // error?: boolean
//     // setError?: Dispatch<SetStateAction<boolean>>
//     // changeCount?: (count: number | string) => void
// }

export const CounterTable = ({type}: TableProps) => {
    const {count, minCount, maxCount} = useSelector<AppRootStore, CounterState>(state => state.counter)
    //const {count: customCount, minCount, maxCount, } = useSelector<AppRootStore, CounterState>(state => state.counter)
    const [error, setError] = useState(false)
    const startCount = 0;
    const finalStyle = `${styles.table} ${count === maxCount || error ? styles.max : ''}`;


    if (
        (startCount !== undefined && startCount < 0) ||
        (startCount !== undefined && maxCount <= startCount)) {
        setError(true)
    }
    // else {
    //     setError(false)
    // }

    // const settingProcess = () => {
    //     changeCount && changeCount(`Set values and press 'SET'`)
    // }

    return (
        <>
            {type === "setting" ? (
                    <div className={styles.table}>
                        <Input
                            type="number"
                            value={maxCount}
                            title={"Input max value"}
                            // onChange={changeMaxCount}
                            // onFocus={settingProcess}
                            isError={error}
                        />
                        <Input
                            type="number"
                            value={startCount || 0}
                            title={"Input start value"}
                            // onChange={changeStartCount}
                            // onFocus={settingProcess}
                            isError={error}
                        />
                    </div>
                )
                : (
                    <div className={finalStyle}>
                        {error ? "Incorrect value!" : count}
                    </div>

                )}
        </>

    )

}

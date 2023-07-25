import React, {useEffect, useState} from 'react';
import styles from "./CounterTwoInOne.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CustomCounterState} from "../../state/customCounter/customCounterReducer";
import {
    changeCountAC,
    changeMaxCountAC,
    changeStartCountAC
} from "../../state/customCounter/customCounterActionCreators";
import {CustomCounterTable} from "../table/CustomCounterTable";
import {CustomCounterActions} from "../actions/CustomCounterActions";

export type TableType = "setting" | "superCounter"

const CounterTwoInOne = () => {
        const {count, maxCount, startCount, error} =
            useSelector<AppRootStore, CustomCounterState>(state => state.customCounter)
        const dispatch = useDispatch()

        const [type, setType] = useState<TableType>("superCounter")

        useEffect(() => {
            const maxCountFromLS: string | null = localStorage.getItem("maxCount")
            maxCountFromLS && dispatch(changeMaxCountAC(Number(maxCountFromLS)))

            const startCountFromLS: string | null = localStorage.getItem("startCount")
            if (startCountFromLS) {
                dispatch(changeStartCountAC(Number(startCountFromLS)))
                dispatch(changeCountAC(Number(startCountFromLS)))
            }
        }, [])

        return (
            <div className={styles.counter}>
                <CustomCounterTable
                    type={type}
                    count={count}
                    maxCount={maxCount}
                    startCount={startCount}
                    error={error}
                />
                <CustomCounterActions
                    type={type}
                    changeType={setType}
                    count={count}
                    maxCount={maxCount}
                    startCount={startCount}
                    error={error}
                />
            </div>
        );
    }
;

export default CounterTwoInOne;
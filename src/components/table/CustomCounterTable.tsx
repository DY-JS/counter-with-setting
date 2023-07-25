import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import styles from "./Table.module.css";
import Input from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CustomCounterState} from "../../state/customCounter/customCounterReducer";
import {
    changeMaxCountAC,
    changeStartCountAC, setErrorAC,
    setSettingMessageAC
} from "../../state/customCounter/customCounterActionCreators";

interface TableProps {
    type?: string
}

export const CustomCounterTable = ({type}: TableProps) => {
    const {count, minCount, maxCount, startCount, error} = useSelector<AppRootStore, CustomCounterState>(state => state.customCounter)
    const dispatch = useDispatch()
    const finalStyle = `${styles.table} ${count === maxCount || error ? styles.max : ''}`;


    console.log('error', error)

    const settingProcess = () => {
       dispatch(setSettingMessageAC(`Set values and press 'SET'`));
    }

    const validateInputs = (maxValue: number, startValue: number): boolean => {
        return  maxValue > startValue
    }

    const changeMaxCount = (value: number) => {
        dispatch(changeMaxCountAC(value))
    }

    const changeStartCount = (value: number) => {
        dispatch(changeStartCountAC(value))
    }

    useEffect(() => {
        !validateInputs(maxCount, startCount)
            ? dispatch(setErrorAC(true))
            : dispatch(setErrorAC(false))
    }, [startCount, maxCount])

    return (
        <>
            {type === "setting" ? (
                    <div className={styles.table}>
                        <Input
                            type="number"
                            value={maxCount}
                            title={"Input max value"}
                            onChange={changeMaxCount}
                            onFocus={settingProcess}
                            isError={error}
                        />
                        <Input
                            type="number"
                            value={startCount}
                            title={"Input start value"}
                            onChange={changeStartCount}
                            onFocus={settingProcess}
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

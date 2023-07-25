import React, {useEffect, useState} from 'react';
import styles from "./CounterWithSettings.module.css";
import Screen from "../screen/Screen";
import {
    changeCountAC,
    changeMaxCountAC,
    changeStartCountAC
} from "../../state/customCounter/customCounterActionCreators";
import {useDispatch} from "react-redux";

const CounterWithSettings = () => {
    const dispatch = useDispatch()

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
        <div className={styles.main}>
            <Screen type="setting"/>
            <Screen type="counter"/>
        </div>
    );
};

export default CounterWithSettings;
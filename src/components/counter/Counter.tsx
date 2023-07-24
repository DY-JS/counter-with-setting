import React, {useState} from 'react';
// import {CounterTable} from "../table/CounterTable";
import styles from "./Counter.module.css";
import {Actions} from "../actions/Actions";
import {useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CounterState} from "../../state/counter/counterReducer";
import {CounterTable} from "../table/CounterTable";

const Counter = () => {
    // const {count, minCount, maxCount, type} = useSelector<AppRootStore, CounterState>(state => state.counter)

    return (
        <div className={styles.counter}>
          <CounterTable type={"counter"} />
            <Actions />
        </div>
    );
};

export default Counter;
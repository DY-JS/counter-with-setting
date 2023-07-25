import {useState} from "react";
import styles from "./Table.module.css";
import {useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CounterState} from "../../state/counter/counterReducer";

interface TableProps {
    type?: string
}

export const CounterTable = ({type}: TableProps) => {
    const {count, maxCount} = useSelector<AppRootStore, CounterState>(state => state.counter)
    const finalStyle = `${styles.table} ${count === maxCount ? styles.max : ''}`;

    return (
        <div className={finalStyle}>
            {count}
        </div>
    )
}

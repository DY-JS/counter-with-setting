import React, {useEffect, useState} from 'react';
import {Table} from "../table/Table";
import styles from "./CounterTwoInOne.module.css";
import {Actions} from "../actions/Actions";

export type TableType = "setting" | "counter"

const CounterTwoInOne = () => {
    const minCount = 0;
    const [maxCount, setMaxCount] = useState<number>(minCount);
    const [startCount, setStartCount] = useState<number>(minCount)
    const [count, setCount] = useState<number | string>(minCount)
    const [type, setType] = useState<TableType>("counter")
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const maxCountFromLS: string | null = localStorage.getItem("maxCount")
        maxCountFromLS ? setMaxCount(Number(maxCountFromLS)) : setMaxCount(0)

        const startCountFromLS: string | null = localStorage.getItem("startCount")
        if (startCountFromLS) {
            setStartCount(Number(startCountFromLS));
            setCount(Number(startCountFromLS))
        }
    }, [])
    return (
        <div className={styles.counter}>
           <Table
               minCount={minCount}
               count={count}
               changeCount={setCount}
               maxCount={maxCount}
               changeMaxCount={setMaxCount}
               startCount={startCount}
               changeStartCount={setStartCount}
               error={error}
               setError={setError}
               type={type}
               changeType={setType}

           />
            <Actions
                type={type}
                changeType={setType}
                count={count}
                maxCount={maxCount}
                minCount={minCount}
                startCount={startCount}
                changeCount={setCount}
                error={error}
                setError={setError}
            />
        </div>
    );
};

export default CounterTwoInOne;
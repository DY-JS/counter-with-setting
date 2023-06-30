import React, {useState} from 'react';
import {Table} from "../table/Table";
import styles from "./Counter.module.css";
import {Actions} from "../actions/Actions";



const Counter = () => {
    const minCount = 0;
    const maxCount = 5;

    const [count, setCount] = useState<number>(minCount)
    return (
        <div className={styles.counter}>
           <Table count={count} maxCount={maxCount}/>
            <Actions count={count} minCount={minCount} maxCount={maxCount} changeCount={setCount}/>
        </div>
    );
};

export default Counter;
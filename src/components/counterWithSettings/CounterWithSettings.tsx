import React, {useEffect, useState} from 'react';
import styles from "./CounterWithSettings.module.css";
import Screen from "../screen/Screen";

const CounterWithSettings = () => {
    const minCount = 0;
    const [maxCount, setMaxCount] = useState<number>(minCount);
    const [startCount, setStartCount] = useState<number>(minCount)
    const [count, setCount] = useState<number | string>(minCount)
    //const [settingMode, setSettingMode] = useState<boolean>(false)
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
        <div className={styles.main}>
            <Screen
                type="setting"
                minCount={minCount}
                count={count}
                changeCount={setCount}
                maxCount={maxCount}
                changeMaxCount={setMaxCount}
                startCount={startCount}
                changeStartCount={setStartCount}
                error={error}
                setError={setError}
            />
            <Screen
                count={count}
                maxCount={maxCount}
                startCount={startCount}
                minCount={minCount}
                changeCount={setCount}
                error={error}
            />
        </div>
    );
};

export default CounterWithSettings;
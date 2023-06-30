import React, {Dispatch, FC, SetStateAction} from 'react';

import {Table} from "../table/Table";
import {Actions} from "../actions/Actions";
import styles from "./Screen.module.css"

interface ScreenProps {
    type?: string
    count: number | string
    changeCount: (count: number | string) => void
    minCount: number
    maxCount: number
    changeMaxCount?: (count: number) => void
    startCount: number
    changeStartCount?: (count: number) => void
    error?: boolean
    setError?: Dispatch<SetStateAction<boolean>>
}

const Screen: FC<ScreenProps> = ({
                                     type,
                                     count,
                                     changeCount,
                                     minCount,
                                     maxCount,
                                     changeMaxCount,
                                     startCount,
                                     changeStartCount,
                                     error,
                                     setError

                                 }) => {
    return (
        <div className={styles.settings}>
            <Table
                type={type}
                count={count}
                startCount={startCount}
                maxCount={maxCount}
                changeMaxCount={changeMaxCount}
                changeStartCount={changeStartCount}
                error={error}
                setError={setError}
                changeCount={changeCount}
            />
            <Actions
                type={type}
                count={count}
                maxCount={maxCount}
                minCount={minCount}
                startCount={startCount}
                changeCount={changeCount}
                error={error}
            />
        </div>
    );
};

export default Screen;
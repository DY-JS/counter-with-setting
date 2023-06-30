import React, {Dispatch, FC, SetStateAction} from 'react';

import {Table} from "../table/Table";
import {Actions} from "../actions/Actions";
import styles from "./Screen.module.css"

interface ScreenProps {
    type?: string
    count: number
    changeCount: (count: number) => void
    minCount: number
    maxCount: number
    changeMaxCount?: (count: number) => void
    startCount: number
    changeStartCount?: (count: number) => void
    settingMode?: boolean
    setSettingMode?: Dispatch<SetStateAction<boolean>>
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
                                     settingMode,
                                     setSettingMode,
                                     error,
                                     setError

                                 }) => {
    return (
        <div className={styles.settings}>
            <Table
                type={type}
                count={count}
                minCount={minCount}
                startCount={startCount}
                maxCount={maxCount}
                changeMaxCount={changeMaxCount}
                changeStartCount={changeStartCount}
                 settingMode={settingMode}
                setSettingMode={setSettingMode}
                error={error}
                setError={setError}
            />
            <Actions
                type={type}
                count={count}
                maxCount={maxCount}
                minCount={minCount}
                startCount={startCount}
                changeCount={changeCount}
                settingMode={settingMode}
                setSettingMode={setSettingMode}
                error={error}
                setError={setError}
            />
        </div>
    );
};

export default Screen;
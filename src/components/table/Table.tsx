import {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import styles from "./Table.module.css";
import Input from "../input/Input";

interface TableProps {
    type?: string
    count: number
    minCount?: number
    maxCount: number
    startCount?: number
    changeMaxCount?: (count: number) => void
    changeStartCount?: (count: number) => void
    settingMode?: boolean
    setSettingMode?: Dispatch<SetStateAction<boolean>>
    error?: boolean
    setError?: Dispatch<SetStateAction<boolean>>

}

export const Table: FC<TableProps> = ({
                                          type, count,
                                          minCount, maxCount,
                                          startCount,
                                          changeMaxCount,
                                          changeStartCount,
                                          settingMode,
                                          setSettingMode,
                                          error,
                                          setError
                                      }) => {
    const finalStyle = `${styles.table} ${count === maxCount || error ? styles.max : ''}`;
    //const isError = (maxCount === startCount) || (startCount !== undefined && startCount < 0);
    if (
        // settingMode && (
        (startCount !== undefined && startCount < 0) ||
        (startCount !== undefined && maxCount <= startCount))
        // )
    {
        setError && setError(true)
    } else {
        setError && setError(false)
    }

    const settingProcess = () => {
        setSettingMode && setSettingMode(true)
    }

    console.log('s= ', settingMode, 'e= ', error)
    //
    // if (settingMode && !error && type !== "setting") {
    //     return (
    //         <div className={styles.table}>
    //             "Input values and click SET"
    //         </div>
    //     );
    //}

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
                            value={startCount || 0}
                            title={"Input start value"}
                            onChange={changeStartCount}
                            onFocus={setSettingMode}
                            isError={error}
                        />
                    </div>
                )
                : (
                    <div className={finalStyle}>
                        {error ? "Incorrect value" : `Count: ${count}`}
                        {/*{settingMode && error ? "Input values and click SET" :*/}
                        {/*    error ? "Incorrect value" : `Count: ${count}`}*/}
                    </div>

                )}
        </>

    )

}

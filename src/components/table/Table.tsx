import {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import styles from "./Table.module.css";
import Input from "../input/Input";

interface TableProps {
    type?: string
    count: number | string
    minCount?: number
    maxCount: number
    startCount?: number
    changeMaxCount?: (count: number) => void
    changeStartCount?: (count: number) => void
    error?: boolean
    setError?: Dispatch<SetStateAction<boolean>>
    changeCount?: (count: number | string) => void

}

export const Table: FC<TableProps> = ({
                                          type, count,
                                          minCount, maxCount,
                                          startCount,
                                          changeMaxCount,
                                          changeStartCount,
                                          error,
                                          setError,
                                          changeCount
                                      }) => {
    const finalStyle = `${styles.table} ${count === maxCount || error ? styles.max : ''}`;

    if (
        (startCount !== undefined && startCount < 0) ||
        (startCount !== undefined && maxCount <= startCount)) {
        setError && setError(true)
    } else {
        setError && setError(false)
    }

    const settingProcess = () => {
        changeCount && changeCount('Set values and press SET')
    }

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
                            onFocus={settingProcess}
                            isError={error}
                        />
                    </div>
                )
                : (
                    <div className={finalStyle}>
                        {error ? "Incorrect value" : count}
                    </div>

                )}
        </>

    )

}

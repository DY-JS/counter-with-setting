import styles from "./Actions.module.css";
import {Dispatch, FC, SetStateAction} from "react";
import {Button} from "../button/Button";

interface ActionsProps {
    type?: string
    count: number | string
    minCount: number
    maxCount: number
    startCount?: number
    changeCount: (count: number) => void
    error?: boolean
    setError?: Dispatch<SetStateAction<boolean>>
}

export const Actions: FC<ActionsProps> = ({
                                              type,
                                              count,
                                              minCount,
                                              maxCount,
                                              startCount,
                                              changeCount,
                                              error,
                                              setError,
                                          }) => {

    const increment = () => changeCount(+count + 1)
    const reset = () => changeCount(startCount || 0)
    const setAndSave = () => {
        changeCount(startCount || 0)
        // setSettingMode && !error && setSettingMode(false)
        localStorage.setItem("maxCount", JSON.stringify(maxCount));
        localStorage.setItem("startCount", JSON.stringify(startCount));
    }

    const isDisabled = (startCount !== undefined && (maxCount <= startCount)) || (startCount !== undefined && startCount < 0)
        || error;
    return (
        <div className={styles.actions}>
            {
                type === "setting" ?
                    (
                        <Button
                            disabled={isDisabled}
                            callback={setAndSave}
                            title="SET"/>
                    )
                    : (
                        <>
                            <Button disabled={count === maxCount || isDisabled || typeof count === 'string'}
                                    callback={increment}
                                    title="INCREMENT"/>
                            <Button disabled={count === startCount || isDisabled || typeof count === 'string'}
                                    callback={reset}
                                    title="RESET"/>
                        </>)
            }
        </div>
    );

};

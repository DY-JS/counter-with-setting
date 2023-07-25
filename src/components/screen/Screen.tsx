import React, {FC} from 'react';
import styles from "./Screen.module.css"
import {CustomCounterTable} from "../table/CustomCounterTable";
import {CustomCounterActions} from "../actions/CustomCounterActions";
import {useSelector} from "react-redux";
import {AppRootStore} from "../../state/state";
import {CustomCounterState} from "../../state/customCounter/customCounterReducer";

interface ScreenProps {
    type?: string
}

const Screen: FC<ScreenProps> = ({type}: ScreenProps) => {
    const {count, maxCount, startCount, error} =
        useSelector<AppRootStore, CustomCounterState>(state => state.customCounter)

    return (
        <div className={styles.settings}>
            <CustomCounterTable
                type={type}
                count={count}
                maxCount={maxCount}
                startCount={startCount}
                error={error}
            />
            <CustomCounterActions
                type={type}
                count={count}
                maxCount={maxCount}
                startCount={startCount}
                error={error}
            />
        </div>
    );
};

export default Screen;
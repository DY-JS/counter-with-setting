import React, {FC } from 'react';
import styles from "./Screen.module.css"
import {CustomCounterTable} from "../table/CustomCounterTable";
import {CustomCounterActions} from "../actions/CustomCounterActions";

interface ScreenProps {
    type?: string
}

const Screen: FC<ScreenProps> = ({type}: ScreenProps) => {
    return (
        <div className={styles.settings}>
            <CustomCounterTable
                 type={type}
            />
            <CustomCounterActions
                 type={type}
            />
        </div>
    );
};

export default Screen;
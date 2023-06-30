import styles from "./Button.module.css";
import {FC} from "react";

interface ButtonProps {
    title: string,
    callback: () => void
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({title, disabled, callback, ...props}) => {
    return (
            <button className={styles.button} disabled={disabled} onClick={callback} >{title}</button>
    );
};

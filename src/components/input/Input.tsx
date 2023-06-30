import React, {ChangeEvent, FC} from 'react';
import styles from "./Input.module.css";

interface InputProps {
    type?: string
    title?: string
    value: number
    onChange?: (num: number) => void
    onFocus?: () => void
    isError?: boolean
}

const Input: FC<InputProps> = ({type, title, value, onChange, onFocus, isError}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(Number(e.currentTarget.value))
    }

    const handleFocus = () => {
        if (onFocus) onFocus()
    }

    const inputStyle = `${styles.input} ${isError ? styles.error : ''}`

    return (
        <div className={styles.inputWrapper}>
            <p className={styles.inputTitle}>{title}</p>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                className={inputStyle}
            />
        </div>
    );
};

export default Input;
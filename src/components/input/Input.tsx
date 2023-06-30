import React, {ChangeEvent, Dispatch, FC, SetStateAction} from 'react';
import styles from "./Input.module.css";

interface InputProps {
    type?: string
    title?: string
    value: number
    onChange?: (num: number) => void
    onFocus?: Dispatch<SetStateAction<boolean>>
    isError?: boolean
}

const Input: FC<InputProps> = ({type, title, value, onChange, onFocus, isError}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       onChange && onChange(Number(e.currentTarget.value))
    }

    const handleFocus = () => {
        onFocus && onFocus(true)
    }

    const inputStyle = `${styles.input} ${isError ? styles.error: ''}`

    return (
        <div className={styles.inputWrapper}>
            <p className={styles.inputTitle}>{title}</p>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                className={inputStyle}
                //className={isError ? styles.error : ''}
            />
        </div>
    );
};

export default Input;
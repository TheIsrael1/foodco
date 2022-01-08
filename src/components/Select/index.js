import React from 'react'
import styles from './select.module.css'

const Select = ({
    items,
    onChange,
    placeholder,
    value

}) => {
    return (
        <select 
        className={`${styles.select}`}
        onChange={onChange}
        value={value}
        >
            <option value="" defaultValue={true} disabled>select {placeholder}</option>
            {items && items.map((i,idx)=>(
                <option key={idx}>{i}</option>
            ))}
        </select>
    )
}

export default Select

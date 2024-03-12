import React, { useState } from 'react';
import './Checkbox.module.scss'

const Checkbox = ({
    className,
    checked,
    onClick,
    title
    }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        const newCheckedValue = !isChecked;
        setIsChecked(newCheckedValue);
        onClick(newCheckedValue);
    };
    return (
        <label onClick={onClick} className={className}>
            <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            />
            {title}
        </label>
    );
};

export default Checkbox;
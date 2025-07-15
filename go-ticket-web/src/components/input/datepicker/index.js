import React, { useState } from 'react';

export default function DatePickerInput({ id, name, value, onChange}) {
    const [date, setDate] = useState('');

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    return(
        <input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}
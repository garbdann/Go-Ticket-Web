import React from 'react';

export default function DatePickerInput({ id, name, value, onChange }) {
  return (
    <input
      type="date"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

import React from 'react';
import { StyledImageInput } from './style';

export default function ImageInput({ id, name, value, onChange }) {
  return (
    <StyledImageInput
      type="file"
      accept="image/*"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

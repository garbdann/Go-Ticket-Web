import React from 'react';
import { StyledTextInput } from "./style";

export default function TextInput({ id, name, value, onChange}) {
  return (
    <StyledTextInput
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}


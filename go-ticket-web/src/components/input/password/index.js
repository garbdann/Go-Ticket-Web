import React from 'react';
import { StyledPasswordInput } from "./style";

export default function PasswordInput({ id, name, value, onChange}) {
    return (
        <StyledPasswordInput
            id={id}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
  }


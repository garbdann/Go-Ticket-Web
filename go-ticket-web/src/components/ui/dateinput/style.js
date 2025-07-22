import styled from 'styled-components';

export const StyledDatePicker = styled.input.attrs({ type: 'date' })`
  width: 100%;
  padding: 8px 12px 13px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #888;
  border-radius: 3px;
  background-color: transparent;

  &:focus {
    outline: none;
    border: 1px solid #555;
    border-radius: 4px;
    background-color: #fff;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    cursor: pointer;
  }
`;


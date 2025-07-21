import styled from 'styled-components';

export const StyledSelect = styled.select`
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #888;
  border-radius: 3px;
  padding: 10px 40px 14px 12px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  width: 100%;

  transition: border-color 0.2s ease;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

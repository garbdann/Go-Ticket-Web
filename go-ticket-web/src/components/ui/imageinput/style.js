import styled from 'styled-components';
import ContentBox from '../contentbox';

export const CustomContentBox = styled(ContentBox)`
  display: flex;
  flexDirection: column;
  gap: 10px;
`

export const StyledImageInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;
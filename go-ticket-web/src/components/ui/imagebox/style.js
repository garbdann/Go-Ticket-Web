import styled from 'styled-components';

export const StyledImageBox = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

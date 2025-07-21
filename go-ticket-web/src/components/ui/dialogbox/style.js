import styled from 'styled-components';
import ContentBox from '../contentbox';

export const StyledDialogBox = styled(ContentBox)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const StyledDialogText = styled(ContentBox)`
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

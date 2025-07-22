import styled from 'styled-components';
import ContentBox from '../contentbox';

export const StyledEventDetailsDialogBox = styled(ContentBox)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledEventDetailsContent = styled(ContentBox)`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const DetailItem = styled.p`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #333;

  strong {
    color: #555;
    margin-right: 5px;
  }
`;

export const ModalTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
  color: #222;
  font-size: 1.8rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
`;
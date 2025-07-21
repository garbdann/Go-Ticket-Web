import styled from 'styled-components';
import ContentBox from '../ui/contentbox';

export const GridContentBox = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
`;

export const CustomContentBox = styled(ContentBox)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


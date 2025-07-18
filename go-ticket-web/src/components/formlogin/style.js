import styled from 'styled-components'; 
import ContentBox from '../ui/contentbox';

export const CustomContentBox = styled(ContentBox)`
    display: flex;
    justify-content: row;
    justify-content: space-between;
`

export const Link = styled.div`
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    margin-top: 20px;
    font-weight: 600;
    padding-top: 7px;

    &:hover {
        opacity: 0.6;
    }
`
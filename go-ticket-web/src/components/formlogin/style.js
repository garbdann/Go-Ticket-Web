import styled from 'styled-components'; 
import ContentBox from '../ui/contentbox';

export const CustomContentBox = styled(ContentBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 75vh;
    padding-top: 150px;
`

export const SendBox = styled(ContentBox)`
    text-align: center;
    width: 100%;
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
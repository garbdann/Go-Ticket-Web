import styled from 'styled-components';

export const Container = styled.div`
    padding: 150px 50px 50px 50px;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #555;
    margin-bottom: 5px;
`;

export const SubTitle = styled.h3`
    font-size: 24px;
    color: #888;
    font-weight: 100;
    margin-bottom: 40px;
`;

export const Label = styled.label`
    display: block;
    font-size: 18px;
    color: #111;
    margin-top: 15px;
    margin-bottom: 5px;
`;

export const InputPassword = styled.input.attrs({ type: 'password' })`
    display: inline-block;
    width: 90%;
    height: 30px;
    border: 0px;
    border-bottom: 1px solid #888;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;

    &:focus {
        outline: none;
        border: 1px solid #555;
        border-radius: 4px;
    } 
`

export const SendBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    width: 90%;
    padding-bottom: 30px;
    padding-left: 150px;
`
export const Submit = styled.input.attrs({ type: 'submit' })`
    box-sizing: border-box;
    width: 180px;
    height: 35px;
    background-color: pink;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 20px;
    border: 0px;
    cursor: pointer;
`
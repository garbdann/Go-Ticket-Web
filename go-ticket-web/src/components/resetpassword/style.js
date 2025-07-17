import styled from 'styled-components';

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 12px;
`

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 240px;
    background-color: white;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
`

export const Title = styled.h1`
    font-size: 30px;
    color: #555;
    margin: 10px 0px;
`

export const Info = styled.p`
    text-align: justify;
    color: #555;
`

export const Container = styled.div`
    padding: 150px 50px 50px 50px;
`

export const Submit = styled.input.attrs({ type: 'submit' })`
    margin: 0px;
    width: 40%;
    height: 35px;
    border: 0px;
    background-color: lightseagreen;
    cursor: grab;
    font-size: 16px;
    font-weight: 700;
    color: white;
    align-self: center;

    &:hover {
        opacity: 0.7;
    }
`
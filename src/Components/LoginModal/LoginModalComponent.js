import styled from "styled-components";

export const Container = styled.div`
    display: ${({value})=>(value?'flex':'none')};
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 50;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    
`
export const Wrapper = styled.div`
    background-color: white;
    width: 500px;
    padding:50px 10px 50px 10px;
    border-radius: 20px;
    align-self: center;
    text-align: center;
    z-index: 51;
`

export const InputField = styled.input`

`
export const Text = styled.p`
    margin: 0px;
    padding:0px;
    

`

export const Button = styled.div`
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 20px;
    align-self: center;
    height: auto;
    background-color: black;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer;
    :hover{
        background-color: rgba(0,0,0,0.8);
    }

`


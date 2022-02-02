import { BsBack,  BsSearch,BsPerson,BsPersonPlus,BsFillCloudDownloadFill } from 'react-icons/bs';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: white;
    margin: auto;
    text-align: center;
    width: 100%;
    display: flex;

    font-family: 'Lato', sans-serif;
    z-index:2;
    justify-content: space-between;
    align-items: center;
    padding-left:50px;
    padding-right:50px;
    box-sizing: border-box;
    position: fixed;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149); 
    height: 70px;
`

export const NameContainer = styled.div`
    font-size: 30px; 
    font-family: 'Lato', sans-serif;
 
`
export const Title = styled.a`
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    color: rgb(29, 29, 29);
    font-weight: 900;
    font: black;
    font-size: 30px;
` 

export const UserContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content:space-evenly;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
    background-color: ${({bgColor})=>(bgColor)};
    justify-content:center;
    margin: 10px 0px 10px 10px;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    color: ${({textcolor})=>(textcolor?textcolor:"black")};;
    :hover{
        background-color:${({hoverColor})=>(hoverColor)};
        transition:all 0.2s ease-in-out;
        cursor: pointer;
        color: ${({hoverTextColor})=>(hoverTextColor?hoverTextColor:"black")};;
    }
`

export const Para = styled.p`
    margin: 0;
    padding:0;
    text-align: center;
    align-self: center;
    font-size: 18px;

`

export const UserIcon = styled(BsPerson)`
    padding-right:10px;
    font-size: 18px;
`
export const SignUpIcon = styled(BsPersonPlus)`
    padding-right:10px;
    font-size: 18px;
   
`
export const DownloadIcon = styled(BsFillCloudDownloadFill)`
    padding-right:10px;
    font-size: 18px;
   
`


export const Modal = styled.div`

`
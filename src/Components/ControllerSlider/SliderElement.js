import styled from 'styled-components';
import {FaColumns,FaTextHeight,FaUpload} from 'react-icons/fa'
export const Container = styled.div`
    height: 100%;
    width: ${({value})=>(value?'400px':'70px')};
    position: fixed;
    z-index: 1;
    top: 69px;
    left: 0;
    overflow-x: hidden;
    transition:all 0.2s ease-in-out;
    display: flex;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149); 
    background-color: white;
    flex-direction: row;
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 70px;

`
export const OptionContainer = styled.div`
    margin: 0px 20px 20px 0px;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    background-color:${({selected})=>(selected?"#efefef":"white")};
    padding:10px 0px 10px 0px;


    :hover{
        background-color: #efefef;
    }
`

export const TemplateIcon = styled(FaColumns)`
`
export const TextIcon = styled(FaTextHeight)`
`

export const Para = styled.p`
    margin: 0;
    padding:0;
    text-align: center;
    align-self: center;
    font-size: 10px;
    font-weight: bold;
    padding-left: 5px;
    padding-right: 5px;
`

export const SlideOut = styled.div`
    width: 100%;
    height: 100%;
    background-color: #efefef;
    overflow: hidden;

`



export const SlideOutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 20px;
    overflow: scroll;
    height: 90%;
    background-color: #efefef;
`

export const Image = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: 150px;
    object-fit: contain;
    cursor: pointer;
`
export const AddTextContainer = styled.div`
text-align: center;

`
export const AddHeading = styled.p`
    margin: 0;
    padding:0;
    text-align: center;
    align-self: center;
    font-size: 28px;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px;
    background-color: lightgray;
    cursor: pointer;
    border-radius: 15px;
`
export const AddSubHeading = styled.p`
    margin: 0;
    padding:0;
    text-align: center;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px;
    background-color: lightgray;
    cursor: pointer;
    border-radius: 15px;
`
export const AddPara = styled.p`
    margin: 0;
    padding:0;
    text-align: center;
    font-weight: bold;
    align-self: center;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px;
    background-color: lightgray;
    cursor: pointer;
    border-radius: 15px;
`

export const InputText = styled.input`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px;
    width: 90%;
    color: black;
    background-color: lightgray;
    border-radius: 5px;
    outline:none;
    border-style: none;
    word-break: break-all;
    line-break: auto;
    overflow: hidden;
    font-size: 15px;
`

export const UploadIcon = styled(FaUpload)`
`
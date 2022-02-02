import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    left:${({isSliderOut})=>(isSliderOut?"400px":"70px")};;;
    right: 10px;
    top:70px;
    bottom: 0px;
    margin-right: 0px;
    background-color: #404040;
    position: fixed;
    transition:all 0.2s ease-in-out;
    z-index: 1;
    display: flex;
    padding-top: 6%;
    justify-content: center;
    
    
`
export const CanvasContainer = styled.canvas`
    width: 900px;
    height:500px;
    background-color: transparent;
    /* border:1px solid white; */

`

export const DivContainer = styled.div`
    height: 150px;
    width: 300px;
    position: fixed;

`

export const TextAreaContainer = styled.textarea`
    z-index: 10;
    left: 2px;
    top:2px;
    bottom:2px;
    right: 2px;
    height:98px;
    width: 198px;
    color: black;
    position: absolute;
    background-color: transparent;
    border-radius: 5px;
    outline:none;
    border-style: none;
    word-break: break-all;
    line-break: auto;
    overflow: hidden;
    resize: none;
`
export const MoveContainerBlock = styled.div`
    height: 100px;
    width: 200px;
    padding: 2px;
    border-radius: 5px;
    position: absolute;
    border-style: dashed;
    border-width: 2px;
    border-color: rgba(0,0,0,1);
    cursor:move; 
    z-index: 1;
    
    animation:moving 1s linear infinite;
    @keyframes moving{
        0%{
            opacity: 50%
        };
        50%{
            opacity: 100%
        };
        100%{
            opacity: 50%
        }
    }

`
export const CanvasImage = styled.img`
    height: 10px;
    width: 10px;
`
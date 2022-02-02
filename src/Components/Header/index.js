import React from 'react'
import { HeaderContainer, NameContainer,Title,DownloadIcon, UserIcon, UserContainer, SignUpIcon, ButtonContainer, Para } from './HeaderComponent'
const Header = (props) => {
    return (
        <HeaderContainer>
            <NameContainer><Title href="/"> MEMEIT</Title></NameContainer>
            <UserContainer>
                {!props.isLoggedIN?
                    <>
                        <ButtonContainer onClick={()=>{props.setShowModal()}} hoverColor="#efefef" bgColor="white">
                            <UserIcon/><Para>Login</Para>
                        </ButtonContainer>
                        
                        <ButtonContainer hoverColor="#efefef" bgColor="white">
                            <SignUpIcon/><Para>Signup</Para>
                        </ButtonContainer>
                    </>    

                :
                    <div style={{display:'flex',justifyContent:'center'}}><UserIcon style={{alignSelf:"center"}}/><Para>{props.userName}</Para></div>
                }
                
                
                <ButtonContainer onClick={()=>{
                            var canvas = document.getElementById("myCanvas");        
                            var link = document.getElementById('link');
                            link.setAttribute('download', 'MyMeme.png');
                            link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
                            link.click();
                        }} textcolor="white" hoverTextColor="black" hoverColor="#efefef" bgColor="#404040">
                    <DownloadIcon /><Para ><a id="link" style={{textDecoration:'none',color:'inherit'}}>Download</a></Para>
                </ButtonContainer>

                
            </UserContainer>
        </HeaderContainer>
    )
}

export default Header

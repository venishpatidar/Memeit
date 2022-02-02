import React from 'react';
import { InputText } from '../ControllerSlider/SliderElement';
import { Title } from '../Header/HeaderComponent';
import { Button, Container, Text, Wrapper } from './LoginModalComponent';

const LoginModal = (props) => {
    
    return(
        <Container  value={props.showModal} >
            <Wrapper onClick={()=>{}}>

            <Title>MEMEIT</Title>
                <div style={{textAlign:'left',padding:"10px"}}>
                    <Text style={{paddingLeft:"10px"}}>Username</Text>
                    <InputText onInput={(e)=>{props.setUsername(e.target.value)}} value={props.userName} type="text"/>
                </div>

                <div style={{textAlign:'left',padding:"10px",marginBottom:'20px'}}>
                    <Text style={{paddingLeft:"10px"}}>Password</Text>
                    <InputText type="password" />
                </div>
                <Button onClick={()=>{props.setShowModal();props.setLoggedIn(true)} } > <Text>Login</Text></Button>
                <div onClick={()=>props.setShowModal()} style={{marginTop:"20px",cursor:'pointer'}}>
                    <Text style={{paddingLeft:"10px"}}>Cancel</Text>
                </div>
            </Wrapper>
        </Container>
    );
};

export default LoginModal;

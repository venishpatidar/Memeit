import React from 'react'
import { Container, Image } from './CarouselComponents'




class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc:'img1.jpeg',
            imgSrcDQ:['img1.jpeg','img2.jpeg','img3.jpeg'],
        };
        
    }
    componentDidMount(){
        this.CarouslerInterval = setInterval(()=>{
            let Dq = this.state.imgSrcDQ
            let top = Dq.shift();
            Dq.push(top);
            this.setState({imgSrcDQ:Dq})
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.CarouslerInterval);
    }

    render(){
        return (
            <Container>
                <Image  src={"./Carousel/"+this.state.imgSrcDQ[0]} />
            </Container>
        )
    }
}

export default Carousel

import React from "react";
import Canvas from "../Components/Canvas";
import LeftSlider from "../Components/ControllerSlider";
import Header from "../Components/Header";
import LoginModal from "../Components/LoginModal";



const Home = () => {
	const [isSliderOut,setSliderOut] =React.useState(true)
	const [selectedImageSrc, setSelectedImageSrc] = React.useState(null)
	const [textArray,setTextArray]=React.useState([{text:'',textSize:'',textWeight:''}])
	const [togKey,setTogKey] = React.useState(false)
	const togTogKey=()=>{
		setTogKey(!togKey)
	}
	const [showModal,setShowModal]=React.useState(false);
    const toggleModal = ()=>{
        setShowModal(!showModal);
    }

	const [isLoggedIN,setLoggedIn] = React.useState(false);
	const [userName, setUsername] = React.useState(null)
    return (
        <>
			<LoginModal userName={userName} setUsername={setUsername} isLoggedIN={isLoggedIN} setLoggedIn={setLoggedIn} showModal={showModal} setShowModal={toggleModal} />
			<Header userName={userName} isLoggedIN={isLoggedIN} setShowModal={toggleModal} />
			<div style={{display:'flex',flexDirection:'row'}}>
				<LeftSlider togTogKey={togTogKey} textArray={textArray} setTextArray={setTextArray} setSelectedImageSrc={setSelectedImageSrc} setSliderOut={setSliderOut} />
				<Canvas togKey={togKey} textArray={textArray}  selectedImageSrc={selectedImageSrc} isSliderOut={isSliderOut} />
			</div>
        </>
    )
}

export default Home

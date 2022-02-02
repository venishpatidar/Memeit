import React from 'react'
import { Container,OptionContainer,TemplateIcon,Wrapper,Para,TextIcon,UploadIcon,SlideOut, AddHeading, AddTextContainer, AddSubHeading, AddPara, InputText} from './SliderElement'
import {SlideOutContainer,Image} from './SliderElement';

const importImages = r => r.keys().map(r);
const files = importImages(require.context('../../../public/templates', false, /\.*$/));

// slideShowing
// 0->Templates
// 1->Add Text
// 2->Upload Image

const LeftSlider = (props) => {

    const [slideOutValue,setSlideOutValue] = React.useState(true)
    const [slideShowing,setSlideShowing] = React.useState(0)
    const ToggleSlideOutValue = (val)=>{
        props.setSliderOut(true)
        setSlideOutValue(true)
    }
    const setSlideShowingValue = (val)=>{
        setSlideShowing(val)
    }

    const [inputTextValue,setInputTextValue] = React.useState('')
    const handleChange = e => {
        if (e.target.files[0]) {
            var reader = new FileReader()
            reader.onload = function () {
                props.setSelectedImageSrc(reader.result)
                console.log(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0]);    
        }
      }

    return (
            <Container value={slideOutValue}>
                <Wrapper>
                    <OptionContainer selected={slideShowing===0} onClick={()=>{slideOutValue?slideShowing===0?ToggleSlideOutValue(false):ToggleSlideOutValue(true):ToggleSlideOutValue(true);setSlideShowingValue(0);}}>
                        <TemplateIcon/>
                        <Para>Templates</Para>
                    </OptionContainer>
                    <OptionContainer selected={slideShowing===1} onClick={()=>{slideOutValue?slideShowing===1?ToggleSlideOutValue(false):ToggleSlideOutValue(true):ToggleSlideOutValue(true);setSlideShowingValue(1);}}>
                        <TextIcon/>
                        <Para>Text</Para>
                    </OptionContainer>

                    <OptionContainer selected={slideShowing===2} onClick={()=>{slideOutValue?slideShowing===2?ToggleSlideOutValue(false):ToggleSlideOutValue(true):ToggleSlideOutValue(true);setSlideShowingValue(2);}}>
                        <UploadIcon/>
                        <Para>Upload Image</Para>
                    </OptionContainer>
                </Wrapper>

                <SlideOut value={slideOutValue}>
                        {slideShowing===0?
                            <SlideOutContainer>

                                {files.map((data,index)=>{
                                    return(
                                        <Image onClick={()=>{props.setSelectedImageSrc(data)}} src={data} key={index} />
                                    )
                                })}
                            </SlideOutContainer>
                            :
                            slideShowing===1?
                                <AddTextContainer>
                                    <InputText maxLength={30} value={inputTextValue} onInput={(e)=>{setInputTextValue(e.target.value)}} />
                                    <AddHeading onClick={()=>{
                                        let a = props.textArray
                                        a.push({text:inputTextValue,textSize:28,textWeight:'bold'})
                                        props.setTextArray(a)
                                        props.togTogKey()
                                    }}>Add Heading</AddHeading>
                                    <AddSubHeading onClick={()=>{
                                        let a = props.textArray
                                        a.push({text:inputTextValue,textSize:18,textWeight:'bold'})
                                        props.setTextArray(a)
                                        props.togTogKey()
                                    }}>Add SubHeading</AddSubHeading>
                                    <AddPara onClick={()=>{
                                        let a = props.textArray
                                        a.push({text:inputTextValue,textSize:15,textWeight:'bold'})
                                        props.setTextArray(a)
                                        props.togTogKey()
                                    }}>Add Para</AddPara>
                                </AddTextContainer>
                                :
                                <AddTextContainer>
                                    <div style={{marginTop:"10px",fontSize:"48px"}}>
                                        <UploadIcon/>
                                    </div>
                                    <AddSubHeading onClick={()=>{
                                        document.getElementById("file").click()
                                    }}>
                                    <input id='file' name='file' style={{display:'none'}}  type="file"  onChange={handleChange}  accept="image/*"/>
                                      Upload Image
                                        </AddSubHeading>
                                </AddTextContainer>
                        }

                </SlideOut>

            </Container>

    )
}
export default LeftSlider;
import React from 'react';
import { Container,CanvasContainer,DivContainer,MoveContainerBlock,TextAreaContainer,CanvasImage } from './CanvasComponent';

class Canvas extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    componentDidUpdate(){

        requestAnimationFrame(renderLoop);          

        var canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        var selectedText;
        ctx.canvas.width=900;
        ctx.canvas.height=500;
        

        const mouse = {
            x: 0, 
            y: 0,
            bounds: canvas.getBoundingClientRect(),
            button: false,
            dragging: false,
            dragOffsetX: 0,
            dragOffsetY: 0,
            events(event) {  
                const m = mouse;
                if (event.type === "mousedown") { m.button = true }
                else if (event.type === "mouseup") { m.button = false }
                m.x = event.pageX - m.bounds.left- window.scrollX-0 ;
                m.y = event.pageY - m.bounds.top - window.scrollY-0;
            }   
        };
        document.addEventListener("mousemove", mouse.events);
        document.addEventListener("mousedown", mouse.events);
        document.addEventListener("mouseup", mouse.events);


        function renderLoop(time) {
            if (!textItems.length) {  }
            var cursor = "default";
            handleMouse();
            
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
       
           
            
            var img = document.getElementById("CanvasImageId");
            var hRatio = canvas.width  / img.width    ;
                var vRatio =  canvas.height / img.height  ;
                var ratio  = Math.min ( hRatio, vRatio );
                var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
                var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
                ctx.drawImage(img, 0,0, img.width, img.height,centerShift_x,centerShift_y,img.width*ratio, img.height*ratio); 
            textItems.draw(ctx);


            if (selectedText) { 
                cursor = mouse.dragging ? "none" : "move";
                ctx.fillStyle = "#08F"; // highlight selected text
                selectedText.draw();
            }
            canvas.style.cursor = cursor;
            requestAnimationFrame(renderLoop); 
        }



        function handleMouse() {
            const m = mouse;
            const text = selectedText;
            if (m.button) {
                if (!m.dragging && text !== undefined) {
                    m.dragging = true;
                    m.dragOffsetX = (text.x- m.x);
                    m.dragOffsetY = (text.y - m.y);
                }
                if (m.dragging) {
                    text.x = (m.x + m.dragOffsetX);
                    text.y = (m.y + m.dragOffsetY);
                    text.keepOnCanvas()
                }
            } else {
                if (m.dragging) {                 
                    selectedText = undefined;
                    m.dragging = false;
                }
                selectedText = textItems.getUnder(m);
            }
        }

        const textItems = Object.assign([],{
            getUnder(point) {
                for(const tt of this) {
                    if (point.x >= tt.x && point.x <= tt.x + tt.width && point.y < tt.y + tt.size && point.y >= tt.y) {
                        return tt;
                    }
                }
            },
            add(ctx, text, x,  y, color = "#000", size = 24, font = "arial",weight="normal") { 
                var item;
                ctx.font = size + "px " + font;
                const width = ctx.measureText(text).width;
                this.push(item = {text, x, y, color, font, size, width,
                    draw() { 
                        ctx.font = weight + size + "px " + this.font;
                        
                        ctx.textBaseline = "hanging";
                        ctx.fillText(this.text, this.x, this.y);
                    },
                    keepOnCanvas() {
                        const maxX = ctx.canvas.width - this.width;
                        const maxY = ctx.canvas.height - this.size;
                        this.x < 0 && (this.x = 0);
                        this.y < 0 && (this.y = 0);
                        this.x >= maxX && (this.x = maxX - 1);
                        this.y >= maxY && (this.y = maxY - 1);
                    }, 
                    update(text) {
                        this.text = text;
                        ctx.font = this.size + "px " + this.font;
                        this.width = ctx.measureText(text).width;
                        this.keepOnCanvas();
                    }
                });
                return item;
            },
            draw(ctx) {
                for(const text of this) {
                    ctx.fillStyle = text.color;
                    text.draw();
                }
            }
        });
        
        this.props.textArray.forEach(data=>{
            console.log(data)
            textItems.add(ctx, data.text,0,0,"#000",data.textSize,'Arial',data.textWeight );
        })

    }
    render(){
        return(
            <Container isSliderOut={this.props.isSliderOut}>
                <CanvasContainer id="myCanvas">
                    <CanvasImage id="CanvasImageId"  src={this.props.selectedImageSrc}/>
                </CanvasContainer>
            </Container>
        )
    }
}


export default Canvas;

import styled from "styled-components";


export const Scene = styled.div`
width: 200px;
height: 300px;
perspective: 400px;
`
export const Card = styled.div`
width: 100%;
height:100%;
position: relative;
transition: transform 1s;
transform-style: preserve-3d;

:hover&{
    transform: rotateY(180deg);
}


`
export const CardFace = styled.div<{ face: "front" | "back" }>`
position:absolute;
width:100%;
height:100%;
backface-visibility: hidden;
background-color: ${props => props.face === "front" ? "green" : "orange"};
${props => props.face === "back" && "transform:rotateY(180deg);"};
color:white;
line-height: 300px;
text-align: center;

`
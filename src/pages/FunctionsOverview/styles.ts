import styled from "styled-components";

export const Container = styled.div`
max-width: 500px;
width:100%;
display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr ; 
  gap: 30px 30px; 
`

export const Scene = styled.div`
perspective: 400px;
`
const panelSize = `200px`

const applyTransform = (type: "rotY" | "rotX" | "rotZ" | "translX" | "translY" | "translZ", isInverted: boolean) => {
    switch (type) {
        case "rotY":
            return `rotateY(${isInverted ? "-" : ""}45deg)`
        case "rotX":
            return `rotateX(${isInverted ? "-" : ""}45deg)`
        case "rotZ":
            return `rotateZ(${isInverted ? "-" : ""}45deg)`
        case "translX":
            return `translateX(${isInverted ? "-" : ""}200px)`
        case "translY":
            return `translateY(${isInverted ? "-" : ""}50px)`
        case "translZ":
            return `translateZ(${isInverted ? "-" : ""}50px)`


    }
}

export const Panel = styled.div<{
    transform: "rotY" | "rotX" | "rotZ" | "translX" | "translY" | "translZ",
    inverted: boolean,
    bgColor: string
}>`
width: ${panelSize};
height: ${panelSize};
color:white;
text-align: center;
line-height: ${panelSize};
border: 5px solid black;
font-size: 24px;

background-color: ${props => props.bgColor};
transform: ${props => applyTransform(props.transform, props.inverted)}
`
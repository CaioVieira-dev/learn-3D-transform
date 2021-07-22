import styled from "styled-components";



export const Container = styled.div`
max-width: 420px;
display: flex;
flex-direction:column;
align-items: center;
gap:30px;
padding:16px 0;
`

export const Text = styled.p`
color:white;
font-size: 20px;
line-height:1.5em;
`
export const Example = styled.p`
color:white;
font-size: 16px;
border-radius:16px;
padding:16px;
background-color:hsl(252,20%,60%);
line-height: 2em;
`
export const Title = styled.h2`
color:white;
margin-top: 70px;

`

export const Grid = styled.div`

max-width: 420px;

width:100%;

    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr ; 
    gap: 30px 30px; 

`

/** 
 3D transform functions

The three big functions are rotate, translate and scale,
each of then can be used as a shorthand or specifying
which axis will be transformed.

Axis and translate:
 X is the width axis, using with translate it will
 move the object left or right relative to the it's 
 initial position.
    X => _
 
 Y is the height axis, using with translate it will
 move the object up or down relative to it's initial
 position.
    Y => |
 
 Z is the depth axis, using with translate it will
 move the object closer or further to the perspective.
    Z => / 

About rotate:
    It's quite counterintuitive but X axis rotates around
the horizontal X axis. So it looks like pushing or pulling
from the top of the object, instead of rotating around the
horizontal X axis.
Using the shorthand notation: "rotate3d(0, 1, 0, 60deg)", X,Y,Z,angle
       
About scale:
    With scale3d you specify the amount of scaling applied to
each axis of the object.
Using shorthand notation: "scale3d(2,0.5,3)", X,Y,Z

**/


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
transform: ${props => applyTransform(props.transform, props.inverted)};
@media(max-width:420px){
    width: 160px;
height: 160px;
line-height: 160px;
font-size: 16px;

}
`
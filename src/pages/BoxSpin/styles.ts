import styled, { keyframes } from "styled-components";

const spin = keyframes`
0%,100%{
    transform: translateZ(-100px) rotateY(   0deg); 
}
16%{
    transform: translateZ(-100px) rotateY( -90deg);
}
32%{
    transform: translateZ(-100px) rotateY(-180deg);
}
48%{
    transform: translateZ(-100px) rotateY(  90deg);
}
64%{
    transform: translateZ(-100px) rotateX( -90deg);
}
80%{
    transform: translateZ(-100px) rotateX(  90deg);
}

`
export const Scene = styled.div`
  width: 300px;
  height: 200px;
  perspective: 400px;
`
export const Box = styled.div`
    width: 300px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-50px);
    animation: ${spin} 7s ease-in-out infinite;
    `
export const BoxFace = styled.div`
position: absolute;
opacity: 0.7;
text-align: center;
font-size: 24px;
color:white;
.Front&,.Back&{
width: 300px;
height: 200px;
line-height: 200px;
}
.Left&,.Right&{
    width: 100px;
    height: 200px;
    left:100px;
    line-height:200px;
}
.Top&,.Bottom&{
    width: 300px;
    height: 100px;
    top: 50px;
    line-height:100px;
}
.Front&{ 
    transform: rotateY(  0deg) translateZ( 50px);
    background-color:red;
}
.Back&{ 
    transform: rotateY(  180deg) translateZ( 50px);
    background-color:green;
 }
.Right&{ transform: rotateY(  90deg) translateZ( 150px);
    background-color:purple;
 }
.Left&{ transform: rotateY(  -90deg) translateZ( 150px); 
    background-color:turquoise;
}
.Top&{ transform: rotateX(  90deg) translateZ( 100px);
    background-color:orange;
 }
.Bottom&{ transform: rotateX(  -90deg) translateZ( 100px);
    background-color:palevioletred;
 }


`
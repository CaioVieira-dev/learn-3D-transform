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
width: 200px;
height:200px;
perspective: 400px;
`

export const Cube = styled.div`
width: 100%;
height: 100%;
position: relative;
transform-style: preserve-3d;

transform: translateZ(-100px);
animation: ${spin} 7s ease-in-out infinite;

`
export const CubeFace = styled.div`
position: absolute;
width: 200px;
height: 200px;

font-size: 24px;
color: white;
line-height:200px;
text-align: center;
opacity: 0.7;


.Front&{
    background-color:red;
    transform: rotateY(  0deg) translateZ(100px);
}
.Back&{
    background-color:blue;
    transform: rotateY(180deg) translateZ(100px);
}
.Top&{
    background-color:purple;
    transform: rotateX( 90deg) translateZ(100px);
}
.Bottom&{
    background-color:green; 
    transform: rotateX(-90deg) translateZ(100px);
}
.Left&{
    background-color:cyan;
    transform: rotateY(-90deg) translateZ(100px);
}
.Right&{
    background-color:pink;
    transform: rotateY( 90deg) translateZ(100px);
}
`
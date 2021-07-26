import styled, { keyframes } from "styled-components";

/**
    How to make a cube spin with animation

    Pattern: 
        scene, object, faces

    Structure used: 
        <Scene>
            <Cube>
                <CubeFace></CubeFace>
                <CubeFace></CubeFace>
                <CubeFace></CubeFace>
                <CubeFace></CubeFace>
                <CubeFace></CubeFace>
                <CubeFace></CubeFace>
            </Cube>
        </Scene>
    
    Steps:
        1 - Create a Scene element with the perspective
        2 - Create a Cube element with position relative and
                transform-style preserve-3d
        3 - Create six CubeFace elements with position absolute
        4 - Use transform rotate to set the faces to their 
                correct positions
        5 - Use translate Z with half of the cube width on 
                the faces
        Important: The order of the functions matter.
        6 - Use translate Z with negative half of the cube 
                width on the Cube itself. This will correct
                the pixel distortion that was generated by
                translating the faces
        7 - Create an animation by transforming the cube
                Ex: rotateX(90deg) will show the cube's bottom face
        Remember to maintain the translate Z value while rotating
        8 - Apply the animation on the Cube

*/


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


export const Container = styled.div`
max-width: 420px;
display: flex;
flex-direction:column;
align-items: center;
gap:30px;
`

export const Text = styled.p`
color:white;
font-size: 20px;
line-height:1.5em;
:last-child&{
margin-bottom:16px;
}
`
export const Title = styled.h2`
color:white;

margin-top: 70px;
`
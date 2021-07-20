import styled from "styled-components";
/**
    How to Flip a Card
    
    Pattern: 
        scene, object, faces

    Structure used: 
        <Scene>
            <Card>
                <CardFace></CardFace>
                <CardFace></CardFace>
            </Card>
        </Scene>

    Steps:
        1 - Create a Scene with the perspective
        2 - Create a Card with position relative
                and transform-style preserve-3d
        3 - Create a CardFace with position absolute
                and backface-visibility hidden
        4 - Rotate backface with rotateY(180deg)
        5 - Trigger a transform in card with 
                rotateY(180deg)
        optional - Make a nice style for the CardFace

 */

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
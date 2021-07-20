import styled from "styled-components";

/*
Basics

"To activate 3D space, an element needs perspective"
    - @medianmarmelade

We can do this in two ways, one is using 
    transform:perspective(#DISTANCE)//your view point, big numbers create small effects
The second way
    perspective: #distance;

Setting perspective to a component and applying 3d transformations
is ok, but the effect breaks if you try to do the same thing for
multiple components. So, for multiples components set the perspective
to a parent component, this way you will have only one perspective.

It's possible to use 3D transforms without perspective, however
without perspective, parallel planes are orthogonal and have no
vanishing point. For example, if you apply rotateY(45deg) to a square,
this transform will stretch the square and make it a rectangular shape.

"By default, the vanishing point for a 3D space is positioned at the center. 
You can change the position of the vanishing point with perspective-origin property."
    - @medianmarmelade
Ex:
    perspective-origin: 25% 75%;

Font: https://codepen.io/medienmarmelade/pen/xxbmGqL
*/

export const Scene = styled.div`
perspective: 400px;
`
export const Panel = styled.div`
width: 200px;
height: 200px;
background-color: purple;
transform: rotateY(60deg);
`
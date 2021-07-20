import styled from "styled-components";

export const Container = styled.div`
max-width: 500px;
width:100%;
display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px 0px; 
`

export const Scene = styled.div`
perspective: 400px;
`

export const Panel = styled.div`
width: 200px;
height: 200px;
background-color: purple;
transform: rotateY(60deg);
`
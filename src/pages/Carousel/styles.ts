import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
0%{
    transform: translateZ(-288px) rotateY(320deg);
}
11%{
    transform: translateZ(-288px) rotateY(280deg);
}
22%{
    transform: translateZ(-288px) rotateY(240deg);
}
33%{
    transform:translateZ(-288px) rotateY(200deg) ;
}
44%{
  
    transform: translateZ(-288px) rotateY(160deg);
}
55%{
  
    transform: translateZ(-288px) rotateY(120deg);
}
66%{
  
    transform: translateZ(-288px) rotateY(80deg);
}
77%{
    
    transform:translateZ(-288px) rotateY(40deg) ;
}
88%{
    transform:translateZ(-288px) rotateY(0deg) ;

}


`

export const Scene = styled.div`
    width: 210px;
    height: 140px;
    position: relative;
    perspective: 1000px;
`
export const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transform: translateZ(-288px);
    animation: ${spin} 7s ease-in-out alternate infinite;
`
const generateTransformRotation = (cellAmount: number) => {
    let styles = '';
    for (let i = 0; i < cellAmount + 1; i++) {
        styles += `
        :nth-of-type(${i})&{
            transform:rotateY(${i * 40}deg) translateZ(288px);
        }
        `
    }
    return css`${styles}`;
}

export const Cell = styled.div<{ bgColor: string }>`
    position: absolute;
    width: 190px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    left: 10px;
    top: 10px;
    font-size: 24px;
    color: white;
    opacity: 0.8;
    background-color: ${props => props.bgColor};
    ${generateTransformRotation(9)};

`
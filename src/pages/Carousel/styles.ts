import styled, { css } from "styled-components";

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
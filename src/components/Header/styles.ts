import styled from "styled-components";
import { Link } from 'react-router-dom'

const headerHeight = `56px`;
const bgHue = `252`;
const bgTitleSaturation = `71%`;
const bgTitleBrightness = `25%`;
const bgNavBrightness = `10%`;
const bgNavItemBrightness = `45%`;

const getHeaderHeightNumber = () => {
    return Number(headerHeight.slice(0, headerHeight.length - 2));
}

const configTop = (childAmount: number) => {
    const n = childAmount + 1;
    return `top:-${n * getHeaderHeightNumber() + 1}px`
}



export const StyledHeader = styled.header`
max-width: 500px;
width:clamp(360px,100%,420px);
height: ${headerHeight};

position: fixed;
top: 0;
text-align: center;
cursor: pointer;
z-index: 1000;
`

export const Title = styled.h3`
color:white;
font-size: 24px;
font-weight: bold;
line-height:${headerHeight};

background: hsl(${bgHue},${bgTitleSaturation},${bgTitleBrightness});
z-index:10;
`
export const Navigation = styled.nav<{ childAmount: number }>`
width: 100%;
display: flex;
flex-direction: column;

position:relative;
transition: top 0.6s cubic-bezier(0.57, 0.22, 0.3, 0.98);
${props => configTop(props.childAmount)};
.visible&{ 
   top:0;
}
z-index: -1;

`
export const NavigationItem = styled(Link)`
z-index: -10;
width:100%;
height:  ${headerHeight};
background-color: hsl(${bgHue},${bgTitleSaturation},${bgNavItemBrightness});
color:white;
text-decoration: none;
line-height:${headerHeight};
border-top: 1px solid hsl(${bgHue},${bgTitleSaturation},${bgNavBrightness});;
z-index:1;
`


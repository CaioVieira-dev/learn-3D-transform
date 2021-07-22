
import styled from "styled-components";

const bgHue = `252`;
const bgTitleSaturation = `71%`;
const bgTitleBrightness = `25%`;

export const StyledFooter = styled.footer`
max-width: 500px;
width:clamp(360px,100%,420px);
text-align: center;
position: relative;
left:50%;
transform: translateX(-50%);

`

export const Title = styled.h3`
padding: 8px 16px;
color:white;
font-size: 16px;

background: hsl(${bgHue},${bgTitleSaturation},${bgTitleBrightness});

`
export const StyledLink = styled.a`
color:white;
`


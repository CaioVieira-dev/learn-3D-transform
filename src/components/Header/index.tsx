import { StyledHeader, Title, Navigation, NavigationItem } from './styles'
import { useState } from 'react'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleNav() {
        setIsOpen(!isOpen);
    }
    return (
        <StyledHeader>
            <Title onClick={toggleNav}>Efeito: spin cube</Title>
            <Navigation childAmount={5} className={isOpen ? "visible" : ""}>
                <NavigationItem to="/">Basics</NavigationItem>
                <NavigationItem to="/functions">Functions</NavigationItem>
                <NavigationItem to="/animation/cube-spin">Cube Spin</NavigationItem>
                <NavigationItem to="/animation/box-spin">Box Spin</NavigationItem>
                <NavigationItem to="/animation/flip-card">Flip Card</NavigationItem>
            </Navigation>
        </StyledHeader>
    )
}
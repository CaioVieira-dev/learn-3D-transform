import { StyledHeader, Title, Navigation, NavigationItem } from './styles'
import { useState } from 'react'
import { useNav } from '../../hooks/useNav'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { pageName } = useNav()
    function toggleNav() {
        setIsOpen(!isOpen);
    }
    return (
        <StyledHeader>
            <Title onClick={toggleNav}>{pageName}</Title>
            <Navigation childAmount={6} className={isOpen ? "visible" : ""}>
                <NavigationItem onClick={toggleNav} to="/">Basics</NavigationItem>
                <NavigationItem onClick={toggleNav} to="/functions">Functions</NavigationItem>
                <NavigationItem onClick={toggleNav} to="/animation/cube-spin">Cube Spin</NavigationItem>
                <NavigationItem onClick={toggleNav} to="/animation/box-spin">Box Spin</NavigationItem>
                <NavigationItem onClick={toggleNav} to="/animation/flip-card">Flip Card</NavigationItem>
                <NavigationItem onClick={toggleNav} to="/animation/carousel">Carousel</NavigationItem>
            </Navigation>
        </StyledHeader>
    )
}
import { Scene, CarouselContainer, Cell } from './styles'

export function Carousel() {
    return (
        <Scene>
            <CarouselContainer>
                <Cell bgColor="red">1</Cell>
                <Cell bgColor="blue">2</Cell>
                <Cell bgColor="green">3</Cell>
                <Cell bgColor="turquoise">4</Cell>
                <Cell bgColor="orange">5</Cell>
                <Cell bgColor="cyan">6</Cell>
                <Cell bgColor="purple">7</Cell>
                <Cell bgColor="pink">8</Cell>
                <Cell bgColor="darkgoldenrod">9</Cell>
            </CarouselContainer>
        </Scene>
    )
}
import { useEffect } from 'react';
import { useNav } from '../../hooks/useNav';
import { Scene, CarouselContainer, Cell, Container, Text, Title } from './styles'

export function Carousel() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Efeito: Carousel') }, [changePageName])
    return (
        <Container>
            <Title>Carousel</Title>
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
            <Text>Para fazer um carrossel 3D, você vai precisar de uma cena para
                colocar a perspectiva, de um objeto para ser o carrosel, e dos cartões
                que mostrarão as informações.
            </Text>
            <Text>Para começar crie uma cena com a perspectiva e uma "position: relative".
            </Text>
            <Text>Depois crie o objeto com "position: absolute" e "transform-style: preserve-3d"</Text>
            <Text>Para deixar um espaço entre os cartões use "position: absolute" e left para definir o gap</Text>
            <Text>Para descobrir a rotação de cada cartão, divida 360 pelo numero de cartões. E começando
                do 0, va somando o resultado da divisão no rotateY dos cartões.
            </Text>
            <Text>Para descobrir o "translateZ" dos cartões a formula é: tangente = (cateto oposto/cateto adjacente)</Text>
            <Text>Aplique primeiro a rotateY e depois o translateZ</Text>
            <Text>No objeto aplique um "translateZ" com o inverso do aplicado nos cartões para
                corrigir os pixels borrados.
            </Text>
            <Text>Para mudar de cartão, use rotateY no objeto do carrossel.</Text>
        </Container>
    )
}
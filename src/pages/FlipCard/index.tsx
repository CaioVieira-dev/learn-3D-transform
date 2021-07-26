import { useEffect } from 'react';
import { useNav } from '../../hooks/useNav';
import { Scene, Card, CardFace, Container, Text, Title } from './styles'

export function FlipCard() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Efeito: Flip Card') }, [changePageName])
    return (
        <Container>
            <Title>Flip Card</Title>
            <Scene>
                <Card>
                    <CardFace face="front">Face 1</CardFace>
                    <CardFace face="back">Face 2</CardFace>
                </Card>
            </Scene>
            <Text>Para fazer uma carta girar na tela podemos criar um objeto com
                duas faces, ou se tivermos mais de uma carta precisamos de uma
                cena para ter apenas uma perspectiva.
            </Text>
            <Text>Estarei seguindo com o modelo com cena. Na carta use
                "transform-style: preserve-3d"</Text>
            <Text>A carta terá "position: relative" e as faces "position: absolute".</Text>
            <Text>Nas faces adicione "backface-visibility: hidden". Na face de trás
                use "rotateY(180deg)".
            </Text>
            <Text>Para girar a carta use "rotateY(180deg)"</Text>
        </Container>
    )
}
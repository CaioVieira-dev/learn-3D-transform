import { useEffect } from 'react';
import { useNav } from '../../hooks/useNav';
import { Cube, Scene, CubeFace, Container, Text, Title } from './styles'

export function CubeSpin() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Efeito: Cube Spin') }, [changePageName])
    return (
        <Container>
            <Title>Cube Spin</Title>
            <Scene>
                <Cube>
                    <CubeFace className="Front">Front</CubeFace>
                    <CubeFace className="Back">Back</CubeFace>
                    <CubeFace className="Top">Top</CubeFace>
                    <CubeFace className="Bottom">Bottom</CubeFace>
                    <CubeFace className="Left">Left</CubeFace>
                    <CubeFace className="Right">Right</CubeFace>
                </Cube>
            </Scene>
            <Text>Para fazer um cubo girar na tela, a primeira coisa que temos que
                fazer é montar o cubo. Para isso temos que criar uma cena(onde será
                aplicada a perspectiva), o cubo(o objeto que será girado) e as
                faces do cubo(os quadrados que vemos).
            </Text>
            <Text>O cubo receberá "position: relative" e as faces "position: absolute".
                Cada face será rotacionada e depois receberá uma movimentação no eixo Z,
                isso é o que dará a profundidade ao cubo.
            </Text>
            <Text>As rotações são:</Text>
            <Text>Face da frente: rotação no eixo Y de 0deg</Text>
            <Text>Face de trás: rotação no eixo Y de 180deg</Text>
            <Text>Face da esquerda: rotação no eixo Y de -90deg</Text>
            <Text>Face da direita: rotação no eixo Y de 90deg</Text>
            <Text>Face de cima: rotação no eixo X de 90deg</Text>
            <Text>Face de baixo: rotação no eixo X de -90deg</Text>
            <Text>A movimentação no eixo Z será feita utilizando o "translateZ".
                A distancia dessa movimentação é de metade da altura para as faces
                de cima e de baixo, metade da largura para as faces da esquerda e
                da direita, e metade do comprimento para as faces da frente e de trás.
            </Text>
            <Text>Como estamos trabalhando com um cubo, essa distancia será a mesma,
                o comprimento de um dos lados dividido por dois.
            </Text>
            <Text>É importante se lembrar que a ordem das transformações altera seu
                resultado. Aplique primeiro o "rotate" e depois o "translate".
            </Text>
            <Text>Com isso você tem um cubo pronto,entretanto, você irá notar que
                os pixeis do cubo parecem borrados, para resolver isso aplique uma
                movimentação no eixo z do cubo com o inverso do aplicado no cubo.
                Para girar o cubo é só aplicar uma rotação nele.
            </Text>

        </Container>
    )
}
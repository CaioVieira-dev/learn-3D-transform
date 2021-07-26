import { useEffect } from 'react';
import { useNav } from '../../hooks/useNav';
import { Scene, BoxFace, Box, Container, Text, Title } from './styles'

export function BoxSpin() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Efeito: Box Spin') }, [changePageName])
    return (
        <Container>
            <Title>Box Spin</Title>
            <Scene>
                <Box>
                    <BoxFace className="Front">Front</BoxFace>
                    <BoxFace className="Back">Back</BoxFace>
                    <BoxFace className="Top">Top</BoxFace>
                    <BoxFace className="Bottom">Bottom</BoxFace>
                    <BoxFace className="Left">Left</BoxFace>
                    <BoxFace className="Right">Right</BoxFace>
                </Box>
            </Scene>
            <Text>Para fazer uma caixa girar na tela, a primeira coisa que temos que
                fazer é montar a caixa. Para isso temos que criar uma cena(onde será
                aplicada a perspectiva), a caixa(o objeto que será girado) e as
                faces da caixa(os retângulos que vemos).
            </Text>
            <Text>A caixa receberá "position: relative" e as faces "position: absolute".
                Cada face será rotacionada e depois receberá uma movimentação no eixo Z,
                isso é o que dará a profundidade a caixa. Nessa fase é importante que as
                faces estejam centralizadas, então posicione-as no centro da caixa da
                maneira que for possível.
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
            <Text>É importante se lembrar que a ordem das transformações altera seu
                resultado. Aplique primeiro o "rotate" e depois o "translate".
            </Text>
            <Text>Com isso você tem uma caixa pronta,entretanto, você irá notar que
                os pixeis do cubo parecem borrados, para resolver isso aplique uma
                movimentação no eixo z da caixa com o inverso da profundidade aplicada na
                caixa. Para girar a caixa é só aplicar uma rotação nela.
            </Text>
        </Container>
    )
}
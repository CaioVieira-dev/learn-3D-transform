import { Panel, Scene, Text, Title, Container } from './styles'
import { useEffect } from 'react'
import { useNav } from '../../hooks/useNav'

export function Basics() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Basics') }, [changePageName])

    return (
        <Container>
            <Title>O básico</Title>
            <Scene>
                <Panel></Panel>
            </Scene>
            <Text>
                Para ativar o espaço 3D, um elemento precisa de perspectiva.
                Nós podemos fazer isso de duas maneiras no css, uma é
                usando "transform:perspective(#DISTANCIA)" e a outra é com
                "perspective: #DISTANCIA"
            </Text>
            <Text>
                Pense na distancia da perspectiva como um "de quão longe estou
                observando o objeto"
            </Text>
            <Text>
                É possível usar transformações 3D sem definir uma perspectiva,
                no entanto sem perspectiva planos paralelos são ortogonais e não
                tem ponto de fuga. Por exemplo, se você aplicar num quadrado uma
                rotação de 45 graus no eixo Y, ele se transformara num retângulo
            </Text>
        </Container>
    )
}
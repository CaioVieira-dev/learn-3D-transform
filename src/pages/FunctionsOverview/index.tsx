import { useEffect } from 'react';
import { useNav } from '../../hooks/useNav';
import { Panel, Scene, Grid, Container, Text, Title, Example } from './styles'

export function FunctionsOverview() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Functions effects') }, [changePageName])

    return (
        <Container>
            <Title>Funções</Title>

            <Grid>
                <Scene>
                    <Panel bgColor="blue" transform="rotX" inverted={false} >RotateX 45deg</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="blue" transform="rotX" inverted={true} >RotateX -45deg</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="green" transform="rotY" inverted={false}>RotateY 45deg</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="green" transform="rotY" inverted={true} >RotateY -45deg</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="purple" transform="rotZ" inverted={false} >RotateZ 45deg</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="purple" transform="rotZ" inverted={true} >RotateZ -45deg</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="red" transform="translZ" inverted={false} >TranslateZ 50px</Panel>
                </Scene>
                <Scene>
                    <Panel bgColor="red" transform="translZ" inverted={true} >TranslateZ -50px</Panel>
                </Scene>
            </Grid>
            <Text>
                O "transform" do css pode usar diversas funções, para manipular o espaço 3D
                vou me focar em três delas: a "translate3d", a "rotate3d" e a "scale3d".
            </Text>
            <Text>
                Cada uma dessas funções pode ser escrita especificando um eixo ou de
                maneira resumida, passando os três eixos ao mesmo tempo.
            </Text>
            <Example>
                transform: translateZ(-100px);
                transform: translate3d(10px,5vw,50%);
            </Example>
            <Text>
                A função rotate3d controla a rotação do objeto. Ela pode ser um pouco
                confusa de se entender. Ao aplicar uma rotação no eixo X, o objeto irá
                ser rotacionado com base no eixo X horizontal, ou seja vai parecer que
                o topo do objeto esta mais "perto" ou "longe".
            </Text>
            <Text>
                A função translate3d controla a posição do objeto. Por exemplo, se
                você usar um translateZ(100px), sem rotacionar ou posicionar a origem
                de uma persepectiva, o objeto virá na direção da perspectiva.
            </Text>
            <Text>
                A função scale3d controla o escalonamento do objeto, isto é, o quanto
                um objeto se expande ou retrai em cada eixo.
            </Text>

        </Container>
    )
}
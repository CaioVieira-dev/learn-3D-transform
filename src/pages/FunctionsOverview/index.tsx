import { Panel, Scene, Container } from './styles'

export function FunctionsOverview() {

    return (
        <Container>
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
        </Container>
    )
}
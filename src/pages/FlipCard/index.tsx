import { Scene, Card, CardFace } from './styles'

export function FlipCard() {

    return (
        <Scene>
            <Card>
                <CardFace face="front">Face 1</CardFace>
                <CardFace face="back">Face 2</CardFace>
            </Card>
        </Scene>
    )
}
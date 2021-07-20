import { Cube, Scene, CubeFace } from './styles'

export function CubeSpin() {
    return (
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
    )
}
import { Scene, BoxFace, Box } from './styles'

export function BoxSpin() {
    return (
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
    )
}
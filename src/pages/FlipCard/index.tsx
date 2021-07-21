import { useEffect } from 'react';
import { useNav } from '../../hooks/useNav';
import { Scene, Card, CardFace } from './styles'

export function FlipCard() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Efeito: Flip Card') }, [changePageName])
    return (
        <Scene>
            <Card>
                <CardFace face="front">Face 1</CardFace>
                <CardFace face="back">Face 2</CardFace>
            </Card>
        </Scene>
    )
}
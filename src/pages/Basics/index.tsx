import { Panel, Scene } from './styles'
import { useEffect } from 'react'
import { useNav } from '../../hooks/useNav'

export function Basics() {
    const { changePageName } = useNav();

    useEffect(() => { changePageName('Basics') }, [changePageName])

    return (
        <Scene>
            <Panel></Panel>
        </Scene>
    )
}
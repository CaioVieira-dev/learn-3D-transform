import { ReactNode } from 'react';
import { Wrapper } from './styles'

type ContainerProps = {
    children: ReactNode
}

export function Container(props: ContainerProps) {
    return <Wrapper>{props.children}</Wrapper>
}
import { useContext } from 'react'
import { NavContext } from '../contexts/NavContext'

export function useNav() {
    const value = useContext(NavContext)
    return value
}
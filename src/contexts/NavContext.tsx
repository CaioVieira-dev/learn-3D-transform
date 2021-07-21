import { useState, createContext, ReactNode } from 'react'

type NavContextType = {
    pageName: string;
    changePageName: (name: string) => void;
}

type NavContextProviderProps = {
    children: ReactNode;
}
export const NavContext = createContext({} as NavContextType);

export function NavContextProvider(props: NavContextProviderProps) {
    const [pageName, setPageName] = useState('');

    function changePageName(name: string) {
        setPageName(name);
        console.log(name);
    }

    return (
        <NavContext.Provider value={{
            pageName,
            changePageName
        }}>
            {props.children}
        </NavContext.Provider>
    )
}
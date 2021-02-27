import React, { createContext } from 'react'
import FullLongpage from '../components/pages/Fullpage';
import Borderpage from '../components/pages/Borderpage';
export const ThemeContext = createContext("");

const Layout = (props) => {
    return (
        <ThemeContext.Provider value={{
            fulllongpage:FullLongpage,
            borderpage:Borderpage
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Layout

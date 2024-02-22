import { createContext } from "react";


export default ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    return <ThemeContextProvider>{ children } </ThemeContextProvider>
}
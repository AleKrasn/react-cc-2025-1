import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark' || saved === 'light') return saved
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
        return 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const isDark = theme === 'dark'

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}

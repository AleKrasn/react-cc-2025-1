import { useTheme } from '../../context/ThemeContext.jsx'

function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <button
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 shadow transition-colors"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
        >
            {theme === 'dark' ? (
                // Sun icon
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" />
                    <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            ) : (
                // Moon icon
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
            )}
        </button>
    )
}

export default ThemeToggle

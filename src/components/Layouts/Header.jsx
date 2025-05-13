import { useTheme } from '../../context/ThemeContext.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'

function Header() {
    const { theme } = useTheme()
    return (
        <nav
            className={`w-full px-4 py-4 shadow transition-colors
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <span className={`text-2xl font-bold transition-colors
                    ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Meal Search
                </span>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Header

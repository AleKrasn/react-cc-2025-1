import { useTheme } from '../../context/ThemeContext.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function MainLayout({ children }) {
    const { theme } = useTheme()

    return (
        <div className={`min-h-screen flex flex-col transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Header />
            <main className="flex-1 flex flex-col items-center w-full px-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
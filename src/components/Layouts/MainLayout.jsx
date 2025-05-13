import { useTheme } from '../../context/ThemeContext.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function MainLayout({ children }) {
    const { theme } = useTheme()
    return (
        <div className={`min-h-screen flex flex-col transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Header />
            <div className="w-full flex justify-center mt-6 px-2">
                <SearchForm />
            </div>
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
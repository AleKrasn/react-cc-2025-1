import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext.jsx'
import Cards from '../Cards/Cards.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import Spinner from '../Spinner/Spinner.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function MainLayout({ children }) {
    const { theme } = useTheme()
    const [search, setSearch] = useState('')
    const [cards, setCards] = useState([
        {
            image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
            title: 'Chicken Teriyaki',
            description: 'A delicious chicken teriyaki dish with a sweet and savory sauce.'
        },
        {
            image: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
            title: 'Beef Stroganoff',
            description: 'A classic beef stroganoff with mushrooms and creamy sauce.'
        }
    ])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSearch = async (query) => {
        query = query.trim();
        setSearch(query)
        if (!query) {
            setError(null)
            // Optionally reset to default cards here
            return
        }
        setLoading(true)
        setError(null)
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
            const response = await fetch(url)
            const data = await response.json()
            if (data.meals) {
                console.log(data)
                setCards(
                    data.meals.map(meal => ({
                        image: meal.strMealThumb,
                        title: meal.strMeal,
                        description: meal.strInstructions?.slice(0, 120) + '...'
                    }))
                )
            } else {
                setCards([])
                setError('No meals found.')
            }
        } catch (err) {
            setError('Error fetching data.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`min-h-screen flex flex-col transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Header />
            <div className="w-full flex justify-center mb-4 mt-6 px-2">
                <div className="w-full max-w-xl flex justify-center">
                    <SearchForm onSearch={handleSearch} search={search} setSearch={setSearch} />
                </div>
            </div>
            <main className="flex-1 flex flex-col items-center w-full px-4">
                {loading && (
                    <div className="mt-8 flex flex-col items-center">
                        <Spinner />
                        <div className="mt-2 text-lg text-gray-500 dark:text-gray-300">Loading...</div>
                    </div>
                )}
                {error && <div className="mt-8 text-lg text-red-500">{error}</div>}
                <div className="w-full max-w-7xl">
                    <Cards cards={cards} />
                </div>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
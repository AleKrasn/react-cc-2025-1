import { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards.jsx'
import SearchForm from '../components/SearchForm/SearchForm.jsx'
import Spinner from '../components/Spinner/Spinner.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

function Home() {
    const { theme } = useTheme()
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])
    const [randomMeals, setRandomMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Fetch 6 random meals on mount
    useEffect(() => {
        const fetchRandomMeals = async () => {
            let results = []
            for (let i = 0; i < 6; i++) {
                try {
                    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                    const data = await res.json()
                    if (data.meals && data.meals[0]) {
                        const meal = data.meals[0]
                        results.push({
                            image: meal.strMealThumb,
                            title: meal.strMeal,
                            description: meal.strInstructions?.slice(0, 120) + '...'
                        })
                    }
                } catch (err) {
                    // Ignore errors for random meals
                }
            }
            setRandomMeals(results)
        }
        fetchRandomMeals()
    }, [])

    const handleSearch = async (query) => {
        query = query.trim();
        setSearch(query)
        if (!query) {
            setMeals([])
            setError(null)
            return
        }
        setLoading(true)
        setError(null)
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
            const response = await fetch(url)
            const data = await response.json()
            if (data.meals) {
                setMeals(
                    data.meals.map(meal => ({
                        image: meal.strMealThumb,
                        title: meal.strMeal,
                        description: meal.strInstructions?.slice(0, 120) + '...'
                    }))
                )
            } else {
                setMeals([])
                setError('Sorry No meals found. Please try again or choose from random meals below.')
            }
        } catch (err) {
            setMeals([])
            setError('Error fetching data: ' + err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-full flex justify-center mb-4 mt-6 px-2">
                <div className="w-full max-w-xl flex justify-center">
                    <SearchForm onSearch={handleSearch} search={search} setSearch={setSearch} loading={loading} />
                </div>
            </div>

            {loading && (
                <div className="mt-8 flex flex-col items-center">
                    <Spinner />
                    <div className="mt-2 text-lg text-gray-500 dark:text-gray-300">Loading...</div>
                </div>
            )}
            {error && <div className="mt-8 text-lg mb-8 text-red-100">{error}</div>}
            {search && !loading && !error && meals.length === 0 && (
                <div className="mt-8 text-lg text-gray-500 dark:text-gray-300">No meals found.</div>
            )}
            <div className="w-full max-w-7xl">
                {search && meals.length > 0
                    ? <Cards meals={meals} />
                    : <Cards meals={randomMeals} />
                }
            </div>
        </>
    )
}

export default Home

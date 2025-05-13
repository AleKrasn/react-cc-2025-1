import { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext.jsx'

function SearchForm() {
    const [search, setSearch] = useState('')
    const { theme } = useTheme()
    useEffect(() => {
        console.log('Search term mounted:', search);
        // You can add any side effects here, like fetching data based on the search term
    }, [search])

    return (
        <form onSubmit={e => { e.preventDefault() /* handle search logic here */ }} className="flex items-center">
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder='Search for a meal...'
                className={`h-11 px-4 py-2 rounded-l-md border border-r-0 focus:outline-none text-lg transition-colors
                    ${theme === 'dark'
                        ? 'bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400'
                        : 'bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500'
                    }`}
            />
            <button
                type="submit"
                className={`h-11 px-4 rounded-r-md flex items-center transition-colors
                    ${theme === 'dark'
                        ? 'bg-blue-800 hover:bg-blue-700 text-gray-00'
                        : 'bg-blue-500 hover:bg-blue-500 text-gray-900'
                    }`}
                aria-label="Search"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" />
                    <path strokeLinecap="round" d="M21 21l-3.87-3.87" />
                </svg>
            </button>
        </form>
    )
}

export default SearchForm

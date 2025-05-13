import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeContext.jsx'

function SearchForm({ onSearch, search, setSearch, loading }) {
    const { theme } = useTheme()
    const inputRef = useRef(null)
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!loading) onSearch(search)
            }}
            className="flex items-center"
        >
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder='Search for a meal...'
                ref={inputRef}
                className={`h-11 px-4 py-2 rounded-l-md border border-r-0 focus:outline-none text-lg transition-colors
                    ${theme === 'dark'
                        ? 'bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400'
                        : 'bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500'
                    }`}
            />
            <button
                type="submit"
                disabled={loading}
                className={`h-11 px-4 rounded-r-md flex items-center transition-colors border
                    ${theme === 'dark'
                        ? 'bg-blue-800 hover:bg-blue-700 text-gray-100 border-gray-600'
                        : 'bg-blue-500 hover:bg-blue-500 text-gray-900 border-gray-300'
                    }`}
                aria-label="Search"
            >
                {loading ? (
                    // Tailwind built-in spinner
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" />
                        <path strokeLinecap="round" d="M21 21l-3.87-3.87" />
                    </svg>
                )}
            </button>
        </form>
    )
}

export default SearchForm

import { useEffect, useState } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle.jsx'

function App() {
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
    <div className={`min-h-screen flex items-center justify-center transition-colors relative ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <div className={`max-w-sm rounded overflow-hidden shadow-lg transition-colors ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Delicious Meal"
        />
        <div className="px-6 py-4">
          <div className={`font-bold text-xl mb-2 transition-colors ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Spaghetti Carbonara
          </div>
          <p className={`text-base transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple, creamy, and delicious!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

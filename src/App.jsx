import './App.css'
import Cards from './components/Cards/Cards.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'

function AppContent() {
  const { theme, setTheme } = useTheme()

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple, creamy, and delicious!"
    },
    {
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      title: "Margherita Pizza",
      description: "Traditional Neapolitan pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil."
    }
  ]

  return (
    <MainLayout>
      <div className={`min-h-screen flex items-center justify-center transition-colors relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Cards cards={cards} />
      </div>
    </MainLayout>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

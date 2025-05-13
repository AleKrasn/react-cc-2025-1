import './App.css'
import Card from './components/Card/Card.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx'
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
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      title: "Margherita Pizza",
      description: "Traditional Neapolitan pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil."
    }
  ]

  return (
    <MainLayout>
      <div className={`min-h-screen flex items-center justify-center transition-colors relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        {cards.map(card => (
          <Card
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
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

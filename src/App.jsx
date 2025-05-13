import './App.css'
import MainLayout from './components/layouts/MainLayout.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'



function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App

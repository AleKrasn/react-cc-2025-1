import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/MainLayout.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Home from './Views/Home.jsx';
import Ingridients from './Views/Ingridients.jsx';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/ingredients" element={<Ingridients />} />
          <Route path="*" element={<div className="mt-8 text-xl">404 Not Found</div>} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App;

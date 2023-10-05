
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'

function App() {


  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/pokedex' element={<PokedexPage />} />
    </Routes>
   </div>
  )
}

export default App

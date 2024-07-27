import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AiTicTacToe from './pages/AiTicTacToe'
import Home from './pages/Home'
import TicTacToe from './pages/TicTacToe'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/player-player" element={<TicTacToe />}/>
        <Route path="/player-cpu" element={<AiTicTacToe />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

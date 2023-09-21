import { useState } from 'react'
import AllPlayers  from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
// import NewPlayerForm from './components/NewPlayerForm'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Puppy Bowl!</h1>

   <Routes>
    <Route path='/' element={<AllPlayers />} />
    <Route path='/:id' element={<SinglePlayer />} />
    </Routes>

    </>
  )
}

export default App
